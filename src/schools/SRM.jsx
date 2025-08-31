import React from "react";
import { Link } from "react-router-dom";

function SRMUniversity() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>SRM Institute of Science and Technology (SRM University)</h2>
      <img
        src={`${imageBasePath}srm.jpg`}
        alt="SRM University"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Kattankulathur, Chennai, Tamil Nadu, India
      </p>
      <p>
        <strong>Contact:</strong> 044-27417400 |{" "}
        <strong>Email:</strong> admissions@srmist.edu.in
      </p>

      <h3>About SRM</h3>
      <p>
        SRM Institute of Science and Technology (formerly SRM University) is a
        top private university in India, offering UG, PG, and doctoral programs
        in Engineering, Medicine, Management, Law, and Sciences. It is known for
        its large campus, innovation, and international collaborations.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>B.Tech in CSE, IT, ECE, EEE, Mechanical, Civil, and AI</li>
        <li>Medical & Health Sciences</li>
        <li>Management (MBA, BBA)</li>
        <li>Law, Sciences, and Humanities</li>
        <li>PhD Programs</li>
      </ul>

      <h3>Placements</h3>
      <p>
        SRM has strong placement records with companies like Microsoft, Amazon,
        Google, TCS, Infosys, HCL, Cognizant, and Deloitte. Students also get
        international internship opportunities.
      </p>
    </div>
  );
}

export default SRMUniversity;
