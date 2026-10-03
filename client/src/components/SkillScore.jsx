function SkillScore({ darkMode, score }) {
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
        Overall Skill Score
      </h3>

      <div className="flex items-center justify-center">
        <div className="w-36 h-36 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-2">
          <div
            className={`w-full h-full rounded-full flex items-center justify-center ${
              darkMode ? "bg-slate-900" : "bg-white"
            }`}
          >
            <span
              className={`text-4xl font-bold ${
                darkMode ? "text-purple-300" : "text-purple-700"
              }`}
            >
              {score}%
            </span>
          </div>
        </div>
      </div>

      <p
        className={`text-center mt-4 ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Resume Skill Match
      </p>
    </div>
  );
}

export default SkillScore;