import React from "react";
import { ContactMe, AddressWrapper } from "../styled/HomeStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <>
      <ContactMe id="contact">
        <AddressWrapper>
          <FontAwesomeIcon icon={faEnvelope} className="email" />
          <h2>E-Mail : </h2>
          <h3> dltngus4652@gmail.com</h3>
        </AddressWrapper>
      </ContactMe>
    </>
  );
}
export default Footer;
