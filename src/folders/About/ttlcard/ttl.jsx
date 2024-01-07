import React from 'react';
import { FaRegLightbulb, FaUsers, FaBuilding } from 'react-icons/fa';
import "./ttl.css";

const CustomerValuesPage = () => {
  return (
    <div className="customer-values-container">
      <h2>Customer-Focused Business Values</h2>
      <div className="icons-row">
        <div className="icon">
          <FaRegLightbulb size={50} />
          <p>Enduring Excellence</p>
          <p>
            Creating opportunities, fostering a legacy of exceptional quality, are fundamental to our business ideology, setting enduring excellence, and industry-leading innovation standards.
          </p>
        </div>
        <div className="icon">
          <FaUsers size={50} />
          <p>Open Communication</p>
          <p>
            We firmly believe that structured, transparent interaction, open communication, and collaborative efforts form the cornerstone of successful endeavors.
          </p>
        </div>
        <div className="icon">
          <FaBuilding size={50} />
          <p>Professional Management</p>
          <p>
            Our growth essence thrives on expansive infrastructure and professional management, granting our enterprise a remarkable level of flexibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerValuesPage;
