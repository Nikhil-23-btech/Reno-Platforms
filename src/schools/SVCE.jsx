import React from "react";
import { Link } from "react-router-dom";

function SVCE() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>SVCE - Sri Venkateswara College of Engineering</h2>
      <img
        src={`${imageBasePath}svce.jpg`}
        alt="SVCE"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Karakambadi Road, Tirupati, Andhra Pradesh
      </p>
      <p>
        <strong>Contact:</strong> 0877-2284588 |{" "}
        <strong>Email:</strong> info@svce.edu.in
      </p>

      <h3>About SVCE</h3>
      <p>
        Sri Venkateswara College of Engineering (SVCE), Tirupati, is a reputed
        institution known for its academic excellence and strong focus on
        technical education. The college offers various undergraduate and
        postgraduate programs and is affiliated with Jawaharlal Nehru
        Technological University (JNTU), Anantapur. It emphasizes innovation,
        research, and industry-oriented learning.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>B.Tech in Computer Science & Engineering</li>
        <li>B.Tech in Electronics & Communication Engineering</li>
        <li>B.Tech in Electrical & Electronics Engineering</li>
        <li>B.Tech in Mechanical Engineering</li>
        <li>M.Tech in specialized fields</li>
        <li>MBA (Master of Business Administration)</li>
      </ul>

      <h3>Placements</h3>
      <p>
        SVCE has a dedicated placement cell that brings in top recruiters like
        Infosys, TCS, Wipro, Cognizant, Accenture, HCL, and several core
        engineering companies. The college also facilitates internships and
        skill development programs to improve student employability.
      </p>
    </div>
  );
}

export default SVCE;
