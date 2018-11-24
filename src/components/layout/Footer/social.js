import React from "react";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, ms } from "styles";

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
    color: white;
  }

  .count {
    font-size: ${ms(1)};
  }
`;

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { facebook: "4377", linkedin: "540", instagram: "769" };
  }

  //   componentDidMount() {
  //     fetch(
  //       "https://graph.facebook.com/ECEStudents?fields=fan_count&access_token=EAAD5RBXdTP0BAHQthvjIhZAVXiHWABiGOzqF1JYbu4UjY3eZACcTcO2VSfNn75O1M2L2lMTaGqATzhNZArZCryM4fLKG1y204DDVxfxCbuVqf3bAoAiC9E3ivvKWDwZCkK6DjZCLKHAaxoPwmtgTB6b596HMnfkDgk6R7AAvp6YCHRv8FTbuMfzP45XdvvMu6r19lMWriUegZDZD"
  //     )
  //       .then(res => res.json())
  //       .then(res => this.setState({ facebook: res.fan_count }));
  //   }

  render() {
    return (
      <div>
        <h3>Stay Updated</h3>
        <Content>
          <a
            className="icon"
            href="https://www.facebook.com/ECEStudents"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>

          <a
            className="icon"
            href="https://www.linkedin.com/company/ecestudents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            className="icon"
            href="https://www.instagram.com/ecestudents/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <div className="count">{this.state.facebook}</div>
          <div className="count">{this.state.linkedin}</div>
          <div className="count">{this.state.instagram}</div>
        </Content>
      </div>
    );
  }
}

export default Social;
