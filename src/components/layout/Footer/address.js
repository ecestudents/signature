import React from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, ms, media } from "../../styles";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-auto-flow: row;
  grid-column-gap: ${ms(-1)};
  align-items: center;
  margin-top: 5px;

  .icon {
    font-size: ${ms(1.5)};
    text-align: center;
  }

  .text {
    text-align: left;
  }

  ${media.greaterThan("large")`
    grid-template-columns: 1fr auto;
  `};
`;

const Address = () => (
  <div>
    <h3>Visiting Address</h3>
    <Content>
      <div className="icon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>

      <div className="text">
        Burgemeester Oudlaan 50
        <br />
        Office H7-27
        <br />
        3062 PA | Rotterdam
      </div>
    </Content>
  </div>
);

export default Address;
