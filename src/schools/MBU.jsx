import React from "react";
import { Link } from "react-router-dom";

function MBU() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>MBU - Mohan Babu University</h2>
      <img
        src={`${imageBasePath}mbu.jpg`}
        alt="MBU"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Sree Sainath Nagar, A. Rangampet, Chandragiri, Tirupati District, Andhra Pradesh
      </p>
      <p>
        <strong>Contact:</strong> 0877-2504888 |{" "}
        <strong>Email:</strong> info@mbu.edu.in
      </p>

      <h3>About MBU</h3>
      <p>
        Mohan Babu University (MBU), established in 1992 and upgraded to a university
        status in 2022, is one of the top private universities in Andhra Pradesh.
        It offers a wide range of programs across Engineering, Management, Sciences,
        Pharmacy, Commerce, Arts, and more. The campus is well known for its
        world-class infrastructure, discipline, and focus on holistic student development.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>B.Tech in Computer Science & Engineering</li>
        <li>B.Tech in Artificial Intelligence & Data Science</li>
        <li>B.Tech in Civil, Mechanical, EEE, and ECE</li>
        <li>MBA (Master of Business Administration)</li>
        <li>B.Pharmacy & M.Pharmacy</li>
        <li>B.Sc, M.Sc, and Ph.D. programs</li>
      </ul>

      <h3>Placements</h3>
      <p>
        MBU has a dedicated placement cell, with recruiters like Infosys, Wipro,
        TCS, Cognizant, Accenture, HCL, Amazon, and Tech Mahindra. Students are
        also placed in core engineering companies, startups, and research organizations.
      </p>
    </div>
  );
}

export default MBU;
