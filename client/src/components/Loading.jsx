function Loading({ darkMode }) {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>

        <p
          className={`mt-4 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Analyzing your resume...
        </p>
      </div>
    </div>
  );
}

export default Loading;