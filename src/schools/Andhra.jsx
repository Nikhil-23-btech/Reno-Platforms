import React from "react";
import { Link } from "react-router-dom";

function Andhra() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>Andhra University (AU)</h2>
      <img
        src={`${imageBasePath}andhra-university.jpg`}
        alt="Andhra University"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> Waltair Junction, Visakhapatnam, Andhra Pradesh
      </p>
      <p>
        <strong>Contact:</strong> 0891-2844000 |{" "}
        <strong>Email:</strong> enquiry@andhrauniversity.edu.in
      </p>

      <h3>About Andhra University</h3>
      <p>
        Andhra University, established in 1926, is one of the oldest and most
        reputed universities in India. It offers programs in Engineering,
        Pharmacy, Arts, Law, Management, and Sciences. AU is also well known for
        its research and international collaborations.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>Engineering & Technology Programs</li>
        <li>Pharmacy, Law, and Management</li>
        <li>Arts, Commerce, and Science Programs</li>
        <li>MBA, MCA, M.Tech</li>
        <li>PhD in various disciplines</li>
      </ul>

      <h3>Placements</h3>
      <p>
        AU has strong industry ties, with recruiters such as Infosys, Wipro,
        TCS, Deloitte, and several core companies. Many graduates also join
        academic and government sectors.
      </p>
    </div>
  );
}

export default Andhra;
