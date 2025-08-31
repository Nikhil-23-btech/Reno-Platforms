import React from "react";
import { Link } from "react-router-dom";

function StanfordUniversity() {
  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Schools</Link>
      <h2>Stanford University</h2>
      <img
        src={`${imageBasePath}stan.jpg`}
        alt="Stanford University"
        style={{ width: "100%", maxWidth: "600px", borderRadius: "10px" }}
      />
      <p>
        <strong>Address:</strong> 450 Serra Mall, Stanford, California, USA
      </p>
      <p>
        <strong>Contact:</strong> +1 650-723-2300 |{" "}
        <strong>Email:</strong> info@stanford.edu
      </p>

      <h3>About Stanford</h3>
      <p>
        Stanford University, established in 1885, is one of the world’s leading
        research and teaching institutions. Located in Silicon Valley, it is
        famous for innovation, entrepreneurship, and excellence in research
        across all fields.
      </p>

      <h3>Courses Offered</h3>
      <ul>
        <li>Engineering, Sciences, and Technology</li>
        <li>Business and Management (Stanford GSB)</li>
        <li>Law and Medicine</li>
        <li>Humanities and Social Sciences</li>
        <li>PhD and Research Programs</li>
      </ul>

      <h3>Placements</h3>
      <p>
        Stanford graduates are recruited by top tech giants like Google,
        Facebook, Apple, Amazon, Microsoft, as well as consulting firms,
        startups, and research labs. It has one of the highest startup success
        rates in the world.
      </p>
    </div>
  );
}

export default StanfordUniversity;
