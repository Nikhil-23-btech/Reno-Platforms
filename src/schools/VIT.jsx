import React from "react";
import { Link } from "react-router-dom";

function VITVellore() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>VIT - Vellore Institute of Technology</h2>
      <img
        src={`${imageBasePath}vit.jpg`}
        alt="VIT Vellore"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Vellore, Tamil Nadu, India
      </p>
      <p>
        <strong>Contact:</strong> 0416-2202000 |{" "}
        <strong>Email:</strong> info@vit.ac.in
      </p>

      <h3>About VIT</h3>
      <p>
        Vellore Institute of Technology (VIT), founded in 1984, is one of
        India’s premier private institutions. Known for its world-class
        facilities, VIT offers programs in Engineering, Management, Sciences,
        Law, and Design. It attracts students from across India and abroad.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>B.Tech in multiple disciplines (CSE, AI, ECE, Mechanical, Civil, etc.)</li>
        <li>M.Tech, MBA</li>
        <li>B.Sc, M.Sc programs</li>
        <li>Law, Design, and Humanities</li>
        <li>PhD & Research Programs</li>
      </ul>

      <h3>Placements</h3>
      <p>
        VIT is known for excellent placements, with recruiters such as Microsoft,
        Amazon, Intel, TCS, Infosys, Wipro, Deloitte, and many startups. It holds
        records for highest placement offers in private universities.
      </p>
    </div>
  );
}

export default VITVellore;
