function Recommendations({ darkMode, recommendations }) {
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
        ✨ AI Recommendations
      </h3>

      <div className="space-y-3">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className={`flex gap-3 p-3 rounded-xl ${
              darkMode ? "bg-slate-800" : "bg-purple-50"
            }`}
          >
            <span className="text-purple-500">✦</span>

            <p
              className={
                darkMode ? "text-slate-300" : "text-slate-600"
              }
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;