import React from "react";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, ms, media } from "../../styles";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: row;
  grid-column-gap: ${ms(0)};
  align-items: center;
  margin-top: 5px;
  text-align: center;

  .icon {
    font-size: ${ms(2.5)};
  }

  .count {
    font-size: ${ms(1)};
  }
`;

const icons = [faFacebookSquare, faLinkedin, faInstagram];

const Social = () => (
  <div>
    <h3>Stay Updated</h3>
    <Content>
      {icons.map(i => (
        <div className="icon">
          <FontAwesomeIcon icon={i} />
        </div>
      ))}

      <div className="count">4212</div>
      <div className="count">487</div>
      <div className="count">705</div>
    </Content>
  </div>
);

export default Social;
