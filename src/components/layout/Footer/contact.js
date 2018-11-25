import React from "react";
import {
  faMobileAlt,
  faEnvelope,
  faUser,
  faFile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, ms } from "../../styles";

const Content = styled.div`
  display: grid;

  grid-auto-flow: row;
  grid-column-gap: ${ms(-2)};
  align-items: center;
  margin-top: 5px;

  grid-template-columns: 1fr auto 1fr auto;

  .icon {
    font-size: ${ms(1)};
    //text-align: center;
  }

  .text {
    text-align: left;

    a {
      color: white;
    }
  }
`;

const Contact = () => (
  <div>
    <h3>Contact Us</h3>
    <Content>
      <div className="icon">
        <FontAwesomeIcon icon={faMobileAlt} />
      </div>

      <div className="text">010 - 409 13 04</div>

      <div className="icon">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>

      <div className="text">info@ecestudents.nl</div>

      <div className="icon">
        <FontAwesomeIcon icon={faUser} />
      </div>

      <div className="text">
        <a
          href="https://ece.nl/privacy-statement/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Statement
        </a>
      </div>

      <div className="icon">
        <FontAwesomeIcon icon={faFile} />
      </div>

      <div className="text">
        <a
          href="https://ece.nl/terms-conditions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </a>
      </div>
    </Content>
  </div>
);

export default Contact;
