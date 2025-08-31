import React, { useState } from "react";
import "./AddSchool.css";

function Addschools() {
  const [formData, setFormData] = useState({
    schoolname: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email: "",
    image: null, // file upload
  });

  const [loading, setLoading] = useState(false);

  // handle inputs
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // email validator
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { schoolname, address, city, state, contact, email, image } = formData;

    if (
      !schoolname.trim() ||
      !address.trim() ||
      !city.trim() ||
      !state.trim() ||
      !contact.trim() ||
      !email.trim() ||
      !image
    ) {
      alert("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const data = new FormData();
    data.append("schoolname", schoolname);
    data.append("address", address);
    data.append("city", city);
    data.append("state", state);
    data.append("contact", contact);
    data.append("email", email);
    data.append("image", image);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        body: data,
      });

      if (response.status === 201) {
        alert("School added successfully");

        // reset form
        setFormData({
          schoolname: "",
          address: "",
          city: "",
          state: "",
          contact: "",
          email: "",
          image: null,
        });

        // clear file input
        document.getElementById("imageInput").value = "";
      } else {
        const result = await response.text();
        alert(result);
      }
    } catch (error) {
      alert("Error adding school");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="addschool-container">
      <h2>Add School</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="schoolname"
          placeholder="School Name"
          value={formData.schoolname}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange}
        />

        <input
          type="tel"
          name="contact"
          placeholder="Contact (10 digits)"
          pattern="[0-9]{10}"
          value={formData.contact}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <input
          type="file"
          id="imageInput"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />

        {formData.image && (
          <div className="preview-container">
            <p>Image Preview:</p>
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
            />
          </div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Add School"}
        </button>
      </form>
    </div>
  );
}

export default Addschools;
