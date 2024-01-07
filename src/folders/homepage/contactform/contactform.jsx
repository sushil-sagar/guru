import React, { useState } from 'react';
import './contactform.css'; // Replace 'styles.css' with the actual file name

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    files: [], // Array to store selected files
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: [...formData.files, ...files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log(formData); // For demonstration purposes, log form data to the console
  };

  return (
    <div className="custom-container">
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="files">Upload Image, PDF, or DOC</label>
          <input
            type="file"
            name="files"
            accept="image/*,.pdf,.doc,.docx"
            multiple
            onChange={handleFileChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
