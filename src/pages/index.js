import React from "react";
import Layout from "layout";

import { renderToString } from "react-dom/server";
import SignatureTemplate from "components/pages/signature/template";

import { styled, Wrapper, ms, Gradient } from "styles";
import TextField from "@material-ui/core/TextField";
import CopyToClipboard from "react-copy-html-to-clipboard";

const Content = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .hubspot {
    margin: ${ms(2)};
    ${Gradient()}
    cursor: pointer;
    color: white;
    padding: ${ms(-1)} ${ms(1.5)};
    font-size: ${ms(0.5)};
    text-decoration: none;
    border-radius: 5px;
    text-transform: uppercase;
    border: 0;
  }
`;

const StyledForm = styled.div`
  background: white;
  padding: 55px 45px;
  text-align: left;
  box-shadow: 0 0 8px 0px grey;
  
    margin-bottom: ${ms(3)};

  
  .hidden {
    display: none;
  }
  input[type="number"] {
    text-align: center;
    
    &:before {
      content:"€";
      left: 5px;
    }
  }
  
  form {
    
    display: flex;
    flex-direction: column;
    
    input {
      background: white;
    }
    
    .field{
      margin-top: 8px;
      margin-bottom: 8px;
    }
  
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    } 
    
    button {
      background-color: #D21239;
      color: white;
      margin-top: 16px;
      
      &:hover {
        background-color: #bb1033;
        color: white;
      }
    }
  }
}  
`;

const StyledInfo = styled.div`
  max-width: 600px;

  > div {
    text-align: center;
  }
`;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      position: "",
      phonenumber: "",
      copied: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Layout>
        <Content>
          <StyledForm>
            <div>
              <h2>Let's get you that signature</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
              <TextField
                label="Name"
                className="field"
                value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
                variant="filled"
              />
              <TextField
                label="Position"
                className="field"
                value={this.state.position}
                onChange={this.handleChange("position")}
                margin="normal"
                variant="filled"
              />
              <TextField
                className="field"
                label="Email"
                type="email"
                autoComplete="email"
                margin="normal"
                variant="filled"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
              <TextField
                className="field"
                label="Phonenumber"
                margin="normal"
                variant="filled"
                value={this.state.phonenumber}
                onChange={this.handleChange("phonenumber")}
              />
            </form>
          </StyledForm>

          <SignatureTemplate
            name={this.state.name}
            email={this.state.email}
            position={this.state.position}
            phonenumber={this.state.phonenumber}
          />

          <CopyToClipboard
            text={renderToString(
              <SignatureTemplate
                name={this.state.name}
                email={this.state.email}
                position={this.state.position}
                phonenumber={this.state.phonenumber}
              />
            )}
            onCopy={() => this.setState({ copied: true })}
          >
            <StyledInfo>
              <br />
              <br />
              <b>For Gmail:</b>
              <br />
              <i>
                {" "}
                Drag your mouse across the signature and copy it. In Gmail go to
                Setting -> General, scroll down to account and copy it.{" "}
              </i>
              <br />
              <br />
              <b>For Hubspot:</b>
              <br />
              <i>
                {" "}
                Click the button below. Go to hubspot, select profile &
                preferences, and go to "Edit signature". Past here.{" "}
              </i>
              <br />
              <div>
                <button className="hubspot">Copy for Hubspot</button>
              </div>
            </StyledInfo>
          </CopyToClipboard>
        </Content>
      </Layout>
    );
  }
}
