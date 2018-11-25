import React from "react";
import Layout from "layout";
import { Wrapper, styled, colors, media, ms } from "styles";

const Content = styled(Wrapper)`
  .welcome {
    display: grid;
    grid-template-areas: "left" "right";
    grid-template-rows: auto auto;

    ${media.greaterThan("medium")`
            grid-template-areas: "left right";
            grid-template-columns: auto auto;
            grid-column-gap: ${ms(1)};
    `}
  }
`;

const FrontPage = () => (
  <Layout>
    <Content>
      <div className="welcome">
        <div className="left">
          <h1>
            ERASMUS
            <br />
            CENTRE FOR
            <br />
            ENTREPRENEURSHIP
          </h1>
          <h2>Students</h2>
        </div>
        <div className="right">
          <h3>Who are we?</h3>
          <p>
            Since its establishment in 2013, ECE Students has grown to be the
            largest entrepreneurial student association of Erasmus University
            Rotterdam (EUR), while seeking to contribute to a true culture of
            innovation and entrepreneurship in the city of Rotterdam. Leaving
            behind old, cumbersome association structures – and with the support
            of our alumni and current active members – we created a modern and
            transparent association in aim to provide the right tools and
            resources for the entrepreneurial-minded across campus.
          </p>
          <p>
            We provide all the resources — coaching, network, working space — to
            help anyone bring their ideas into the real world. Do you feel
            ready? Because we are.
          </p>
          <p>
            <b>Julia Lovas</b>
            <br />
            <i>President of the ECE Students Board in 2018-2019</i>
          </p>
        </div>
      </div>
    </Content>
  </Layout>
);

export default FrontPage;
