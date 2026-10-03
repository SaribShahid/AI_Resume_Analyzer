import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";


function Home() {

  const [resume, setResume] = useState(null);

  const [analyzing, setAnalyzing] = useState(false);

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");


  // ==========================================
  // ANALYZE RESUME
  // ==========================================

  const handleAnalyze = async () => {

    if (!resume) {

      alert("Please choose your resume first.");

      return;
    }


    setAnalyzing(true);

    setError("");

    setResult(null);


    try {

      const formData = new FormData();

      formData.append("resume", resume);


     const response = await fetch(
  `${import.meta.env.VITE_API_URL}/resume/analyze`,
  {
    method: "POST",
    body: formData,
  }
);


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.error || "Failed to analyze resume."
        );

      }


      console.log("AI Analysis:", data);


      setResult(data.analysis);


    } catch (error) {

      console.error(error);

      setError(error.message);

    } finally {

      setAnalyzing(false);

    }

  };


  return (

    <main className="home">


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="hero">

        <p className="hero-badge">
          AI POWERED
        </p>


        <h1>
          AI Resume <span>Analyzer</span>
        </h1>


        <p className="hero-description">

          Analyze your resume with artificial intelligence
          and discover opportunities for improvement.

        </p>

      </section>



      {/* ==========================================
          UPLOAD
      ========================================== */}

      <section
        className="upload-section"
        id="analyze"
      >

        <ResumeUpload
          resume={resume}
          setResume={setResume}
        />


        <button
          className="analyze-button"
          onClick={handleAnalyze}
          disabled={analyzing}
        >

          {analyzing
            ? "Analyzing Resume..."
            : "🔍 Analyze Resume"
          }

        </button>


        {/* ERROR */}

        {error && (

          <div className="error-message">

             {error}

          </div>

        )}

      </section>



      {/* ==========================================
          RESULTS
      ========================================== */}

      {result && (

        <section className="results-section">


          <div className="section-heading">

            <p className="section-label">
              YOUR RESULTS
            </p>

            <h2>
              Resume Analysis
            </h2>

            <p>
              AI-powered insights from your resume.
            </p>

          </div>



          {/* ==========================================
              STATISTICS
          ========================================== */}

          <div className="stats-grid">


            {/* ATS SCORE */}

            <div className="stat-card">

              <p>
                ATS Score
              </p>

              <h3>
                {result.atsScore}%
              </h3>

              <span className="positive">
                {result.atsScore >= 80
                  ? "Excellent"
                  : result.atsScore >= 60
                    ? "Good"
                    : "Needs Improvement"
                }
              </span>

            </div>



            {/* SKILLS */}

            <div className="stat-card">

              <p>
                Skills Found
              </p>

              <h3>
                {result.skills?.length || 0}
              </h3>

              <span className="positive">
                {result.skills?.length >= 10
                  ? "Strong"
                  : "Moderate"
                }
              </span>

            </div>



            {/* EXPERIENCE */}

            <div className="stat-card">

              <p>
                Experience
              </p>

              <h3>
                {result.experience?.level || "N/A"}
              </h3>

              <span className="positive">
                Resume Analysis
              </span>

            </div>


          </div>



          {/* ==========================================
              ANALYSIS CARDS
          ========================================== */}

          <div className="analysis-grid">


            {/* ======================================
                DETECTED SKILLS
            ====================================== */}

            <div className="analysis-card">

              <div className="card-header">

                <div>

                  <h3>
                    Detected Skills
                  </h3>

                  <p>
                    Skills identified in your resume
                  </p>

                </div>

              </div>



              <div className="skills-list">

                {result.skills?.map(
                  (skill, index) => (

                    <span key={index}>
                      {skill}
                    </span>

                  )
                )}

              </div>


            </div>



            {/* ======================================
                AI SUGGESTIONS
            ====================================== */}

            <div
              className="analysis-card"
              id="improve"
            >


              <div className="card-header">
                
                <div>

                  <h3>
                    AI Suggestions
                  </h3>

                  <p>
                    Recommendations to improve your resume
                  </p>

                </div>

              </div>



              <div className="recommendations">

                {result.suggestions?.map(
                  (suggestion, index) => (

                    <div
                      className="recommendation"
                      key={index}
                    >

                      <span>
                        ✓
                      </span>

                      <p>
                        {suggestion}
                      </p>

                    </div>

                  )
                )}

              </div>


            </div>


          </div>



          {/* ======================================
              EXPERIENCE DESCRIPTION
          ====================================== */}

          {result.experience?.description && (

            <div className="experience-description">

              <h3>
                Experience Analysis
              </h3>

              <p>
                {result.experience.description}
              </p>

            </div>

          )}


        </section>

      )}


    </main>

  );
}


export default Home;
