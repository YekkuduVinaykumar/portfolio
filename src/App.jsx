import "./App.css";

function App() {
  const socials = ["Instagram", "X", "YouTube", "Discord"];

  return (
    <div className="community-card">
      <h1 className="community-title">Join Our Community</h1>

      <div className="community-stats Head">
        <div className="Head">
          <div className="stat-number">25K+</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="Head">
          <div className="stat-number">1.2K</div>
          <div className="stat-label">Members</div>
        </div>
        <div className="Head">
          <div className="stat-number">480</div>
          <div className="stat-label">Persons</div>
        </div>
      </div>

      <div className="community-socials">
        {socials.map((item) => (
          <button key={item} className="social-btn">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;