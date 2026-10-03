function ResumeUpload({ darkMode, resume, setResume }) {

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      setResume(file);
    }
  };


  return (

    <div
      className={`upload-card ${
        darkMode ? "dark" : ""
      }`}
    >

      <div className="upload-icon">
        📄
      </div>


      <h2>
        Upload your Resume
      </h2>


      <p className="upload-description">
        Upload your resume and let AI analyze your skills,
        experience and career potential.
      </p>


      <p className="file-types">
        Supported formats: PDF / DOCX
      </p>


      <label className="choose-button">

        Choose Resume

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

      </label>


      {resume && (

        <div className="selected-file">

          ✓ {resume.name}

        </div>

      )}

    </div>

  );
}


export default ResumeUpload;