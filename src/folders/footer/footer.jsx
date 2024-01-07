import React from 'react';
import { CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import YourLogoImage from '../assets/glogo.png'; // Replace with the actual path to your logo image
import "./footer.css";
const Footer = () => {
  return (
    <footer className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={YourLogoImage}
              width="60px"
            />
            <span className="ms-4 h5 mb-0 font-weight-bold">Gurudev Electricals and Hardware</span>
          </a>
          <small className="ms-2">&copy; gurudevelectric.com, 2023. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </footer>
  );
};

export default Footer;
