import React from "react";
import { Link } from "react-router-dom";
import "./ShowSchools.css";

function Showschools() {
  const schools = [
    {
      id: 1,
      name: "IIT Tirupati",
      address: "Yerpedu",
      city: "Tirupati",
      state: "Andhra Pradesh",
      contact: "7894561230",
      email: "iitTirupati@edu.in",
      image: "iit-tpt.jpg",
      path: "/iit-tirupati"
    },
    {
      id: 2,
      name: "MBU",
      address: "Rangampet",
      city: "Chandragiri",
      state: "Andhra Pradesh",
      contact: "6547983210",
      email: "mbu@edu.in",
      image: "mbu.jpg",
      path: "/mbu"
    },
    {
      id: 3,
      name: "SVCE",
      address: "Karakambadi",
      city: "Tirupati",
      state: "Andhra Pradesh",
      contact: "1234567890",
      email: "svce@edu.in",
      image: "svce.jpg",
      path: "/svce"
    },
    {
      id: 4,
      name: "SVU",
      address: "Tirupati",
      city: "Tirupati",
      state: "Andhra Pradesh",
      contact: "3698521470",
      email: "svu@edu.in",
      image: "svu.jpg",
      path: "/svu"
    },
    {
      id: 5,
      name: "Andhra University",
      address: "Visakhapatnam",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      contact: "7894561230",
      email: "andhrauniversity@edu.org",
      image: "Andhra.jpg",
      path: "/andhra-university"
    },
    {
      id: 6,
      name: "Stanford University",
      address: "San-Francisco",
      city: "San Jose",
      state: "California",
      contact: "9876543210",
      email: "stanford@edu.in",
      image: "stan.jpg",
      path: "/stanford"
    },
    {
      id: 7,
      name: "VIT Vellore",
      address: "Vellore Campus",
      city: "Vellore",
      state: "Tamil Nadu",
      contact: "7418529630",
      email: "vit@edu.in",
      image: "vit.jpg",
      path: "/vit"
    },
    {
      id: 8,
      name: "SRM University",
      address: "Kattankulathur",
      city: "Chennai",
      state: "Tamil Nadu",
      contact: "8523697410",
      email: "srm@edu.in",
      image: "srm.jpg",
      path: "/srm"
    }
  ];

  const imageBasePath = "/photos/";

  return (
    <div style={{ padding: "20px" }}>
      <h2>Colleges List</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {schools.map((school) => (
          <Link
            to={school.path}
            key={school.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              {school.image && (
                <img
                  src={`${imageBasePath}${school.image}`}
                  alt={school.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              )}
              <h3>{school.name}</h3>
              <p><strong>City:</strong> {school.city}</p>
              <p><strong>State:</strong> {school.state}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Showschools;
