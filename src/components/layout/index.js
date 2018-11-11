import React from "react";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";

import "reset-css";

//import favicon from "../img/favicon.png";

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <main>
      <Helmet
        title="Home | The Red Yarn"
        //link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      />
      {children}
    </main>
    <Footer />
  </div>
);

export default TemplateWrapper;
