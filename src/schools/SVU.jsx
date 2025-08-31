import React from "react";
import { Link } from "react-router-dom";

function SVU() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>SVU - Sri Venkateswara University</h2>
      <img
        src={`${imageBasePath}svu.jpg`}
        alt="SVU"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Gandhi Road, Tirupati, Andhra Pradesh
      </p>
      <p>
        <strong>Contact:</strong> 0877-2289547 |{" "}
        <strong>Email:</strong> registrar@svuniversity.edu.in
      </p>

      <h3>About SVU</h3>
      <p>
        Sri Venkateswara University (SVU), established in 1954, is one of the
        oldest and most prestigious universities in Andhra Pradesh. It offers a
        wide range of UG, PG, and doctoral programs across Sciences, Arts,
        Commerce, Engineering, Pharmacy, and Management.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>Engineering & Technology Programs</li>
        <li>MBA, MCA</li>
        <li>Arts, Science & Commerce UG/PG Programs</li>
        <li>Law, Pharmacy, and Education</li>
        <li>PhD & Research Programs</li>
      </ul>

      <h3>Placements</h3>
      <p>
        SVU alumni are placed in government organizations, IT companies like
        Infosys, TCS, Wipro, and global industries. It also has strong research
        collaborations.
      </p>
    </div>
  );
}

export default SVU;
