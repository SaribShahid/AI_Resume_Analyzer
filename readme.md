# AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes using **Google Gemini AI** and provides ATS-focused insights, detected skills, experience assessment, and personalized improvement suggestions.

The application allows users to upload their resume in **PDF or DOCX format**, extracts the resume content, sends it to Gemini AI for analysis, and displays the results through a modern React interface.

---

##  Features

*  Upload resumes in **PDF / DOCX** format
*  AI-powered resume analysis using **Google Gemini**
*  ATS compatibility score
*  Detect technical and professional skills
*  Experience strength assessment
*  AI-powered resume improvement suggestions
*  ATS-friendly keyword recommendations
*  Clean and responsive dashboard
*  Dark mode interface
*  React + Vite frontend
*  Node.js + Express backend
*  Environment variables for API key protection

---

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* Multer
* PDF Parse
* Mammoth

### AI

* Google Gemini API
* `@google/genai`

---

## Project Structure

```text
AI Resume Analyzer/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ExperienceCard.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── MissingSkills.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── SkillScore.jsx
│   │   │   └── SkillsFound.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
└── README.md
```

> `.env` and `node_modules` are excluded from Git using `.gitignore`.

---

## How It Works

```text
User
 │
 │ Upload Resume
 ▼
React Frontend
 │
 │ POST /resume/analyze
 ▼
Node.js + Express
 │
 │ Multer
 ▼
Resume File
 │
 ├── PDF ──► PDF Text Extraction
 │
 └── DOCX ─► Mammoth Text Extraction
 │
 ▼
Extracted Resume Text
 │
 ▼
Google Gemini AI
 │
 │ Analyze Resume
 ▼
JSON Analysis
 │
 ▼
Express API
 │
 ▼
React Frontend
 │
 ├── ATS Score
 ├── Skills
 ├── Experience
 └── Suggestions
```

---

## AI Analysis

The AI analyzes the uploaded resume and returns information such as:

### ATS Score

A score from **0–100** based on factors including:

* Resume clarity
* Keywords
* Skills
* Experience
* Formatting
* ATS compatibility

### Skills

The system detects relevant technical and professional skills from the resume.

Example:

```text
JavaScript
React
Node.js
MongoDB
Express.js
Git
```

### Experience

The AI evaluates the candidate's experience level:

```text
Beginner
Moderate
Strong
```

### Suggestions

The system provides actionable recommendations such as:

```text
Improve your professional summary
Add missing technical skills
Improve ATS-friendly keywords
Add measurable achievements
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SaribShahid/AI_Resume_Analyzer.git
```

Navigate into the project:

```bash
cd AI_Resume_Analyzer
```

---

# Frontend Setup

Navigate to the client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

# Backend Setup

Open another terminal.

Navigate to the server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` directory:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Never commit your actual `.env` file to GitHub.

You can create a `.env.example` file containing:

```env
GEMINI_API_KEY=
```

---

## Start the Backend

Inside the `server` directory:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

You can test the backend by opening:

```text
http://localhost:5000
```

Expected response:

```json
{
  "message": "ResumeAI backend is running!"
}
```

---

## API Endpoint

### Analyze Resume

```http
POST /resume/analyze
```

### Request

Send the resume as `multipart/form-data`.

Field:

```text
resume
```

Supported files:

```text
.pdf
.docx
```

### Example Response

```json
{
  "success": true,
  "fileName": "resume.pdf",
  "analysis": {
    "atsScore": 82,
    "skills": [
      "JavaScript",
      "React",
      "Node.js"
    ],
    "experience": {
      "level": "Strong",
      "description": "Strong technical experience with modern web technologies."
    },
    "suggestions": [
      "Improve your professional summary",
      "Add missing technical skills",
      "Improve ATS-friendly keywords",
      "Add measurable achievements"
    ]
  }
}
```

---

## Testing

You can test the backend using:

* Browser — for the `/` endpoint
* Postman — for `/resume/analyze`
* React frontend — for complete end-to-end testing

For `/resume/analyze`, select:

```text
Body → form-data
```

Then add:

```text
Key: resume
Type: File
Value: your_resume.pdf
```

---

## Security

The Gemini API key is stored in an environment variable:

```env
GEMINI_API_KEY=
```

The `.env` file should never be uploaded to GitHub.

The project also ignores:

```text
node_modules/
.env
*.log
```

---

## Future Improvements

* Detailed ATS scoring breakdown
* Job description matching
* Missing skills based on target job
* Resume analytics dashboard
* Resume improvement generator
* AI-generated professional summary
* Improved resume export
* User authentication
* Resume history and database storage
* Cloud deployment

---

## Author

**Sarib Shahid**

Computer Science Student | Backend & AI Developer

GitHub:
https://github.com/SaribShahid

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
