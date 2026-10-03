require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mammoth = require("mammoth");
const pdfParse = require("pdf-parse");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",

      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

      "application/msword",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF and DOC/DOCX files are allowed."));
    }
  },
});

async function extractResumeText(file) {

  if (file.mimetype === "application/pdf") {

    const data = await pdfParse(file.buffer);

    return data.text;
  }


  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {

    const result = await mammoth.extractRawText({
      buffer: file.buffer,
    });

    return result.value;
  }


  if (file.mimetype === "application/msword") {

    throw new Error(
      "Old .doc files are not supported yet. Please upload a .docx or .pdf file."
    );
  }


  throw new Error("Unsupported file format.");
}

async function analyzeResume(resumeText) {

  const response = await ai.models.generateContent({

    model: "gemini-3.6-flash",

    contents: `

You are an expert AI Resume Analyzer and ATS consultant.

Analyze the following resume carefully.

RESUME:
-------------------------
${resumeText}
-------------------------

Return ONLY valid JSON.

Do not use markdown.
Do not use code blocks.
Do not add explanations outside JSON.

Use exactly this structure:

{
  "atsScore": 82,
  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ],
  "experience": {
    "level": "Strong",
    "description": "Short explanation of the candidate's experience."
  },
  "suggestions": [
    "Improve your professional summary",
    "Add missing technical skills",
    "Improve ATS-friendly keywords",
    "Add measurable achievements"
  ]
}

Rules:

1. atsScore must be a number from 0 to 100.
2. skills must contain technical and professional skills detected from the resume.
3. Do not invent skills that are not reasonably supported by the resume.
4. experience.level should be one of:
   "Beginner"
   "Moderate"
   "Strong"
5. suggestions should contain useful and specific recommendations.
6. Return valid JSON only.
`,
  });

  let result = response.text.trim();

  result = result
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();


  try {

    return JSON.parse(result);

  } catch (error) {

    console.error("Gemini returned invalid JSON:");

    console.error(result);

    throw new Error("AI returned an invalid analysis response.");
  }
}

app.get("/", (req, res) => {

  res.json({
    message: "ResumeAI backend is running!",
  });

});

app.post(
  "/resume/analyze",
  upload.single("resume"),

  async (req, res) => {

    try {

      // Check file
      if (!req.file) {

        return res.status(400).json({
          error: "Please upload a resume.",
        });

      }


      console.log("Resume received:");
      console.log(req.file.originalname);

      const resumeText = await extractResumeText(req.file);


      if (!resumeText || resumeText.trim().length < 50) {

        return res.status(400).json({
          error: "Could not extract enough text from this resume.",
        });

      }

      console.log("Resume text extracted successfully.");

      const analysis = await analyzeResume(resumeText);

      res.json({

        success: true,

        fileName: req.file.originalname,

        analysis,

      });

    } catch (error) {

      console.error("Resume analysis error:");
      console.error(error);

      res.status(500).json({

        success: false,

        error: error.message || "Something went wrong.",

      });

    }

  }
);

app.use((error, req, res, next) => {

  console.error(error);

  res.status(400).json({
    error: error.message || "Upload error.",
  });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});