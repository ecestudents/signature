import React from "react";
import Layout from "layout";
import Typeform from "components/typeform";
import { Wrapper, styled, colors, media, ms } from "styles";

const partners = [
  "AEGON",
  "Booking.com-logo",
  "DOPPER",
  "EY",
  "ING_Group_N.V._Logo",
  "mediamarkt",
  "oxfam",
  "Port_of_Rotterdam_logo",
  "Rabobank_-_Copy",
  "redbull",
  "thuisbezorgd",
  "Unicef_Logo",
  "Unilever"
];

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

    h1 {
      color: ${colors.blue};
      font-size: ${ms(0.5)};
      
      ${media.greaterThan("large")`
      font-size: ${ms(2)};
      `}
      
    }

    h2,
    h3 {
      color: ${colors.orange};
      font-size: ${ms(1.5)};
      
          ${media.lessThan("medium")`
            margin: ${ms(-2)} 0;
    `}
    }
  }

  .stay-updated {
    text-align: center;

    h1 {
      color: ${colors.blue};
      font-size: ${ms(2.5)};
    } 

    button {
      cursor: pointer;
    }
  }

  .partners {
    margin: ${ms(2)} 0;
    h1 {
      color: ${colors.orange};
    }

    ul {
      padding: 0;
      list-style-type: none;
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, auto);
      grid-column-gap: ${ms(1)};
      grid-row-gap: ${ms(0)};

      ${media.greaterThan("medium")`grid-template-columns: repeat(4, auto);`}
      ${media.greaterThan("large")`grid-template-columns: repeat(5, auto);`}
      ${media.greaterThan("huge")`grid-template-columns: repeat(6, auto);`}
      
      img{
        width: 100%;
      }
    }
  }
`;

const FrontPage = () => (
  <Layout>
    <Content>
      <div className="welcome">
        <div>
          <h1>
            ERASMUS
            <br />
            CENTRE FOR
            <br />
            ENTREPRENEURSHIP
          </h1>
          <h2>Students</h2>
        </div>
        <div>
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

      <div className="stay-updated">
        <h1> Stay up-to-date!</h1>
        <Typeform text="Sign Up" form="WTbHpY" />
      </div>

      <div className="partners">
        <h1>Our Partners & Collaborations include:</h1>
        <ul>
          {partners.map((p, i) => (
            <li key={i}>
              <img
                src={
                  "https://res.cloudinary.com/ece/image/upload/f_auto,q_auto,w_300,c_fill/pages/front/" +
                  p
                }
                alt={p}
              />
            </li>
          ))}

          <li>
            <a
              href="https://zapier.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  "https://res.cloudinary.com/ece/image/upload/f_auto,q_auto,w_300,c_fill/pages/front/_brand_assets_images_logos_zapier-logo-monochrome"
                }
                alt="Zapier"
              />
            </a>{" "}
          </li>
        </ul>
      </div>
    </Content>
  </Layout>
);

export default FrontPage;
