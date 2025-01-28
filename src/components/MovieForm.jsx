// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Movie Data:", formData);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
    margin: " 0 0 0 500px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "800px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#555",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    fontSize: "16px",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    height: "100px",
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const submitButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4caf50",
    color: "white",
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Add New Movie</h2>
        <div>
          <label htmlFor="title" style={labelStyle}>
            Title<span style={{ color: "red" }}>*</span>
          </label>
          <input
            style={inputStyle}
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Movie Title"
          />
        </div>

        <div>
          <label htmlFor="director" style={labelStyle}>
            Director<span style={{ color: "red" }}>*</span>
          </label>
          <input
            style={inputStyle}
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
            placeholder="Director's Name"
          />
        </div>

        <div>
          <label htmlFor="genre" style={labelStyle}>
            Genre<span style={{ color: "red" }}>*</span>
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            style={selectStyle}
            required
          >
            <option value="">Select Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Action">Action</option>
            <option value="Action-drama">Action-Drama</option>
            <option value="Action-Thriller">Action-Thriller</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Thriller-Drama">Thriller-Drama</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <div>
          <label htmlFor="releaseYear" style={labelStyle}>
            Release Year<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            style={inputStyle}
            required
            placeholder="Year of Release"
            min="1900"
          />
        </div>

        <div>
          <label htmlFor="synopsis" style={labelStyle}>
            Synopsis<span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            style={textareaStyle}
            required
            placeholder="A one-liner for the movie"
          ></textarea>
        </div>

        <div>
          <label htmlFor="posterUrl" style={labelStyle}>
            Poster Image URL<span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="url"
            id="posterUrl"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            style={inputStyle}
            required
            placeholder="Movie Poster"
          />
        </div>

        <div style={buttonContainerStyle}>
          <button
            type="submit"
            style={submitButtonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#45a049")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#4caf50")
            }
          >
            Submit
          </button>
          <button
            type="button"
            style={cancelButtonStyle}
            onClick={handleCancel}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#da190b")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#f44336")
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
