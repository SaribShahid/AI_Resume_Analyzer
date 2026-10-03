function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo">
          Resume<span>AI</span>
        </div>

        <div className="nav-links">
          <a href="#analyze">Analyze</a>
          <a href="#improve">Improve</a>

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;