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
