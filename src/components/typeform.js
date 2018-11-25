import React from "react";
import { styled, Gradient, ms, colors } from "styles";
import { ReactTypeformEmbed } from "react-typeform-embed";

const Popup = styled.div`
  display: none;
`;

const Button = styled.button`
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
  cursor: pointer;
  color: white;
  padding: ${ms(-1)} ${ms(2)};
  font-size: ${ms(1.5)};
  text-decoration: none;
  border-radius: 10px;
  text-transform: uppercase;
  border: 0;

  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;

  @-webkit-keyframes glowing {
    0% {
      background-color: ${colors.orange};
      -webkit-box-shadow: 0 0 3px ${colors.orange};
    }
    50% {
      background-color: #f57b0b;
      -webkit-box-shadow: 0 0 40px #f57b0b;
    }
    100% {
      background-color: ${colors.orange};
      -webkit-box-shadow: 0 0 3px ${colors.orange};
    }
  }

  @-moz-keyframes glowing {
    0% {
      background-color: ${colors.orange};
      -moz-box-shadow: 0 0 3px ${colors.orange};
    }
    50% {
      background-color: #f57b0b;
      -moz-box-shadow: 0 0 40px #f57b0b;
    }
    100% {
      background-color: ${colors.orange};
      -moz-box-shadow: 0 0 3px ${colors.orange};
    }
  }

  @-o-keyframes glowing {
    0% {
      background-color: ${colors.orange};
      box-shadow: 0 0 3px ${colors.orange};
    }
    50% {
      background-color: #f57b0b;
      box-shadow: 0 0 40px #f57b0b;
    }
    100% {
      background-color: ${colors.orange};
      box-shadow: 0 0 3px ${colors.orange};
    }
  }

  @keyframes glowing {
    0% {
      background-color: ${colors.orange};
      box-shadow: 0 0 3px ${colors.orange};
    }
    50% {
      background-color: #f57b0b;
      box-shadow: 0 0 40px #f57b0b;
    }
    100% {
      background-color: ${colors.orange};
      box-shadow: 0 0 3px ${colors.orange};
    }
  }
`;
class Typeform extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    console.log("opening typeform");
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div>
        <Popup>
          <ReactTypeformEmbed
            popup={true}
            autoOpen={false}
            url={"https://ecestudents2018.typeform.com/to/" + this.props.form}
            hideHeaders={true}
            hideFooter={true}
            style={{ top: 10 }}
            ref={tf => (this.typeformEmbed = tf)}
          />
        </Popup>
        <Button onClick={this.openForm} gradient={this.props.gradient}>
          {this.props.text}
        </Button>
      </div>
    );
  }
}

export default Typeform;
