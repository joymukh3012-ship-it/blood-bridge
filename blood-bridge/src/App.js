import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-section">
          <img src="/logo.png" alt="logo" className="logo" />
          <h2>Blood Bridge</h2>
        </div>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("search")}>Find Donor</button>
          <button onClick={() => setPage("request")}>Request</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      {page === "home" && (
        <section className="hero fade-in">
          <h1>Connecting Lives. Saving Futures.</h1>
          <p>
            A smart blood donation platform that bridges the gap between donors and patients in emergencies.
          </p>
          <button className="primary-btn" onClick={() => setPage("search")}>
            Find Blood Donor
          </button>
        </section>
      )}

      {/* SEARCH */}
      {page === "search" && (
        <section className="glass-card fade-in">
          <h2>Find Blood Donor</h2>
          <select>
            <option>Select Blood Group</option>
            {bloodGroups.map((group) => (
              <option key={group}>{group}</option>
            ))}
          </select>
          <button className="primary-btn">Search</button>
        </section>
      )}

      {/* REQUEST */}
      {page === "request" && (
        <section className="glass-card fade-in">
          <h2>Emergency Blood Request</h2>
          <input placeholder="Patient Name" />
          <input placeholder="Hospital Name" />
          <input placeholder="Contact Number" />
          <button className="primary-btn">Submit Request</button>
        </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Blood Bridge</h3>
            <p>Saving lives through smart connectivity.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p>Home</p>
            <p>Find Donor</p>
            <p>Request Blood</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: support@bloodbridge.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Blood Bridge 
        </div>
      </footer>

    </div>
  );
}

export default App;