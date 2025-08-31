import React from "react";
import { Link } from "react-router-dom";

function IITTirupati() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>IIT Tirupati</h2>
      <img
        src={`${imageBasePath}iit-tpt.jpg`}
        alt="IIT Tirupati"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Yerpedu, Tirupati, Andhra Pradesh
      </p>
      <p>
        <strong>Contact:</strong> 7894561230 |{" "}
        <strong>Email:</strong> iitTirupati@edu.in
      </p>
      <h3>About IIT Tirupati</h3>
      <p>
        IIT Tirupati is one of the premier institutes of national importance,
        offering cutting-edge programs in engineering, science, and
        technology...
      </p>
      <h3>Courses Offered</h3>
      <ul>
        <li>B.Tech in Computer Science & Engineering</li>
        <li>B.Tech in Electrical Engineering</li>
        <li>B.Tech in Mechanical Engineering</li>
        <li>PhD in various disciplines</li>
      </ul>
      <h3>Placements</h3>
      <p>
        Top recruiters include Google, Microsoft, Amazon, Infosys, TCS, etc.
      </p>
    </div>
  );
}

export default IITTirupati;
