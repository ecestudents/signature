import React from "react";
import Layout from "layout";

import { styled, Wrapper } from "styles";
import TextField from "@material-ui/core/TextField";

const StyledForm = styled.div`
  background: white;
  padding: 55px 45px;
  text-align: left;
  box-shadow: 0 0 8px 0px grey;
  
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

const Signature = styled.div`
  & > div {
    box-shadow: 0 0 8px 0px grey;
    padding: 10px;
  }
`;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", amount: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Layout gradient="#0F852D">
        <Wrapper>
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

          <Signature>
            <div>
              <table border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td>
                      <b>{this.state.name}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>{this.state.position}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <table border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  <tr>
                    <td>
                      <table border={0} cellSpacing={0} cellPadding={0}>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                href="http://www.ecestudents.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src="https://ci6.googleusercontent.com/proxy/hzt89omOSiIKhniFoiOlBijnHATPlt9aY-GLvrmgaQ6zBlPko882AvQG6zPbeO-bcXbsbNVaYph1Wtc_RK2-FiUOZCoMoaCjC8xRypFRQb4uJ1Ix8FhCsDxlmFxiIFyHXTT2fA=s0-d-e1-ft#https://htmlsigs.s3.amazonaws.com/logos/files/000/603/940/landscape/xb2o2b.png"
                                  alt=""
                                  height={94}
                                  style={{ marginRight: 15 }}
                                />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table border={0} cellSpacing={0} cellPadding={0}>
                        <tbody>
                          <tr>
                            <td>
                              <table border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                  <tr>
                                    <td>
                                      <table
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              <table
                                                border={0}
                                                cellSpacing={0}
                                                cellPadding={0}
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <span
                                                        style={{
                                                          color: "#e65625"
                                                        }}
                                                      >
                                                        Mob:
                                                      </span>
                                                      &nbsp;
                                                    </td>
                                                    <td>
                                                      <span
                                                        style={{
                                                          color: "#000000"
                                                        }}
                                                      >
                                                        {this.state.phonenumber}
                                                      </span>
                                                    </td>
                                                    <td>
                                                      &nbsp;
                                                      <span
                                                        style={{
                                                          color: "#ff9900"
                                                        }}
                                                      >
                                                        /&nbsp;
                                                      </span>
                                                    </td>
                                                    <td>
                                                      <span
                                                        style={{
                                                          color: "#e65625"
                                                        }}
                                                      >
                                                        Tel:
                                                      </span>
                                                      &nbsp;
                                                    </td>
                                                    <td>
                                                      <span
                                                        style={{
                                                          color: "#000000"
                                                        }}
                                                      >
                                                        +31&nbsp;(0)10 408 13 04
                                                      </span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <a
                                                href={
                                                  "mailto:" + this.state.email
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {this.state.email}
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              <br />
                                              Room H7-29, <br />
                                              Burgemeester Oudlaan 50, 3062 PA
                                              Rotterdam&nbsp;
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        border={0}
                                        cellSpacing={0}
                                        cellPadding={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              <span
                                                style={{ color: "#000000" }}
                                              >
                                                <a
                                                  href="https://www.ecestudents.nl/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                  ecestudents.nl
                                                </a>
                                                <br />
                                                <a
                                                  href="https://m.facebook.com/profile.php?id=591672020870860&ref=content_filter"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                  Facebook&nbsp;
                                                </a>
                                                |&nbsp;
                                                <a
                                                  href="https://www.instagram.com/ecestudents/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                  Instagram
                                                </a>
                                                &nbsp;|&nbsp;
                                                <a
                                                  href="https://www.linkedin.com/in/odonengegard/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                >
                                                  LinkedIn
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Signature>
        </Wrapper>
      </Layout>
    );
  }
}
