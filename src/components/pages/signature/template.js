import React from "react";
import ese from "./ese.png";
import logo from "./logo.png";
import { styled, ms, colors } from "styles";
const Signature = styled.div`
  box-shadow: 0 0 8px 0px grey;
  padding: 10px;
  font-size: ${ms(-0.5)};
`;

const SignatureTemplate = props => (
  <Signature>
    <div style={{ fontFamily: "MuseoSans,Helvetica,Arial,sans-serif" }}>
      <table border={0} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td>
              <b>{props.name}</b>
            </td>
          </tr>
          <tr>
            <td>{props.position}</td>
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
                                                {" "}
                                                {props.phonenumber}{" "}
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
                                        href={"mailto:" + props.email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: colors.blue }}
                                      >
                                        {props.email}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                  <tr>
                                    <td>
                                      <br />
                                      Room NT-06, <br />
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
                              <table border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                  <tr>
                                    <td>
                                      <span style={{ color: "#000000" }}>
                                        <a
                                          href="https://www.ecestudents.nl/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: colors.blue }}
                                        >
                                          ecestudents.nl
                                        </a>
                                        <br />
                                        <a
                                          href="https://www.facebook.com/ECEStudents"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: colors.blue }}
                                        >
                                          Facebook&nbsp;
                                        </a>
                                        |&nbsp;
                                        <a
                                          href="https://www.instagram.com/ecestudents/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: colors.blue }}
                                        >
                                          Instagram
                                        </a>
                                        &nbsp;|&nbsp;
                                        <a
                                          href="https://www.linkedin.com/company/ecestudents/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          style={{ color: colors.blue }}
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
                          <tr>
                            <td>
                              <table border={0} cellSpacing={0} cellPadding={0}>
                                <tbody>
                                  <tr>
                                    <td>
                                      <img
                                        src={
                                          "https://beta.ecestudents.nl" + logo
                                        }
                                        alt=""
                                        height={94}
                                        style={{ marginRight: 15 }}
                                      />
                                    </td>
                                    <td>
                                      <img
                                        src={
                                          "https://beta.ecestudents.nl" + ese
                                        }
                                        alt=""
                                        height={120}
                                        style={{ paddingTop: 15 }}
                                      />
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
);

export default SignatureTemplate;
