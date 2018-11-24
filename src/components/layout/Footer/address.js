import React from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "../../styles";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-auto-flow: row;
  grid-column-gap: 10px;
  align-items: center;
  margin-top: 5px;
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
