import React from "react";
import Layout from "../components/layout/index";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <img src="https://res.cloudinary.com/ece/image/upload/f_auto,q_auto,h_80/parts/ECEStudents_logo_2018.png" />
          <br />
          <i>
            Hi this the new website of ECE Students, for questions ask Jenny.
          </i>
        </section>
      </Layout>
    );
  }
}
