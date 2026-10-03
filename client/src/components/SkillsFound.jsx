function SkillsFound({ darkMode, skills }) {
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
        Skills Found
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              darkMode
                ? "bg-purple-900 text-purple-200"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsFound;