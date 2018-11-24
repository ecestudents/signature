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

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { facebook: "", linkedin: "", instagram: "" };
  }

  componentDidMount() {
    fetch(
      "https://graph.facebook.com/ECEStudents?fields=fan_count&access_token=EAAD5RBXdTP0BAHQthvjIhZAVXiHWABiGOzqF1JYbu4UjY3eZACcTcO2VSfNn75O1M2L2lMTaGqATzhNZArZCryM4fLKG1y204DDVxfxCbuVqf3bAoAiC9E3ivvKWDwZCkK6DjZCLKHAaxoPwmtgTB6b596HMnfkDgk6R7AAvp6YCHRv8FTbuMfzP45XdvvMu6r19lMWriUegZDZD"
    )
      .then(res => res.json())
      .then(res => this.setState({ facebook: res.fan_count }));
  }

  render() {
    return (
      <div>
        <h3>Stay Updated</h3>
        <Content>
          <div className="icon">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>

          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>

          <div className="count">{this.state.facebook}</div>
          <div className="count">{this.state.linkedin}</div>
          <div className="count">{this.state.instagram}</div>
        </Content>
      </div>
    );
  }
}

export default Social;
