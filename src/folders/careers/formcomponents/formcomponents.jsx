import React from 'react';
import styles from './formcomponents.module.css'; // Import your CSS module

function FormComponent() {
  return (
    <div style={{backgroundColor:'#D9D9D9'}}>
    <div className={styles.formContainer}>
      <form className={styles.applyForm}>
        <h1 className={styles.formHeading}>Send Your Resume Now</h1>
        <div className={styles.formGroup}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder="Enter Your Name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="Your Phone Number" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="about">Tell us something about yourself</label>
          <textarea id="about" placeholder="Your Message"></textarea>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="resume">Resume</label>
          <input type="file" id="resume" accept=".pdf,.doc,.docx" />
          <small>[Resume Only]</small>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
    </div>
  );
}

export default FormComponent;
