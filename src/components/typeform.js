import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";

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
        <div />
        <div>
          <button
            className="btn"
            onClick={this.openForm}
            style={{ cursor: "pointer" }}
          >
            {this.props.text}
          </button>
        </div>
      </div>
    );
  }
}

export default Typeform;
