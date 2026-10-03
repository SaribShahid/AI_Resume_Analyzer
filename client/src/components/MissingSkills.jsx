function MissingSkills({ darkMode, skills }) {
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
        Recommended Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              darkMode
                ? "bg-pink-900 text-pink-200"
                : "bg-pink-100 text-pink-700"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MissingSkills;