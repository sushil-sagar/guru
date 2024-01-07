import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './ContactPage.module.css';
import topImage from '../assets/contacttop.jpeg'; // Replace with the path to your image file

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className={styles['contact-container']}>
      <img
        src={topImage}
        alt="Top"
        className={styles.topImage}
      />
       
      <div className={styles['form-and-about-section']}>
        
        <div className={styles['about-section']}>
        <h2 style={{textAlign:'center', marginTop:'25px'}}>Thanks for Choosing Gurudev Electric</h2>
          <p>
            
Gurudev Electrical and Hardware is a one-stop destination offering a wide array of high-quality electrical appliances and hardware products. Specializing in the sale of geysers, our store also provides an extensive range of lighting solutions, including energy-efficient options to illuminate your spaces effectively. Our collection of fans encompasses various styles and functionalities to suit different preferences.
          </p>
          <p>
          In addition to these specialized offerings, we provide an extensive selection of hardware products to cater to your diverse needs. From basic essentials to specialized hardware supplies, we aim to be your reliable source for home improvement and repair needs. With a commitment to quality and customer satisfaction, Gurudev Electrical and Hardware strives to be your trusted partner for all your electrical and hardware requirements.
          </p>
         
          {/* Add more about section content */}
        </div>

        <div className={styles['contact-form-section']}>
          <h2 style={{textAlign:'center',marginRight:'20px', marginTop:'25px'}}>Get in Touch with us</h2>
          <form className={styles['contact-form']} onSubmit={handleSubmit}>
              <div className={styles['form-group']}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Enter Subject" required />
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Enter Your Message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
        </div>
      </div>

      <div className={styles['contact-details']}>
        <div className={styles['contact-row']}>
          <div className={styles['icon']}>
            <FaEnvelope className={styles['contact-icon']} />
          </div>
          <div className={styles['details']}>
            <h3>Email</h3>
            <p>
              <a href="mailto:mkindoasian@gmail.com">mkindoasian@gmail.com</a>
              <br />
              <a href="mailto:support@gurudevelectric.com">support@gurudevelectric.com</a>
            </p>
          </div>
        </div>
        <div className={styles['contact-row']}>
          <div className={styles['icon']}>
            <FaPhone className={styles['contact-icon']} />
          </div>
          <div className={styles['details']}>
            <h3>Phone</h3>
            <p>
                <a href="tel:+919880766161">Phone: +91 98 8076 6161</a>
                <br />
                <a href="tel:+918041653133">Fax: +91 80 4165 3133</a>
              </p>
          </div>
        </div>
        <div className={styles['contact-row']}>
          <div className={styles['icon']}>
            <FaMapMarkerAlt className={styles['contact-icon']} />
          </div>
          <div className={styles['details']}>
            <h3>Address</h3>
            <p>
                No-32, Nem Rajul Nivas, 7th A Cross, Sarraki Main Road,
                Phase 1, J.P. Nagar, Bangalore-560078
              </p>
          </div>
        </div>
        {/* Add more contact rows */}
      </div>

      <div className={styles['location-section']}>
        <h1 style={{textAlign:'center'}}>Location</h1>
        <iframe
          title="Location Map"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.871189224366!2d77.57819!3d12.911861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15957f0b1dbf%3A0xca3846e3fbfe0567!2sGURUDEV%20ELECTRICALS%20%26%20HARDWARE!5e0!3m2!1sen!2sin!4v1704011335803!5m2!1sen!2sin"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
