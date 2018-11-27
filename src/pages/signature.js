import React from "react";
import Layout from "layout";

import SignatureTemplate from "components/pages/signature/template";

import { styled, Wrapper, ms, colors } from "styles";
import TextField from "@material-ui/core/TextField";

const Content = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", position: "", phonenumber: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Layout gradient="#00305E">
        <Content>
          <StyledForm>
            <div>
              <h2>Lets get you that signature</h2>
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
        </Content>
      </Layout>
    );
  }
}
