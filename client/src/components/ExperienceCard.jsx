function ExperienceCard({ darkMode, experience, education }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg ${
        darkMode
          ? "bg-slate-900 border border-slate-800"
          : "bg-white border border-purple-100"
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-5 ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        Resume Overview
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p
            className={`text-sm mb-1 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Experience
          </p>

          <p
            className={`font-semibold ${
              darkMode ? "text-purple-300" : "text-purple-700"
            }`}
          >
            {experience}
          </p>
        </div>

        <div>
          <p
            className={`text-sm mb-1 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Education
          </p>

          <p
            className={`font-semibold ${
              darkMode ? "text-purple-300" : "text-purple-700"
            }`}
          >
            {education}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;