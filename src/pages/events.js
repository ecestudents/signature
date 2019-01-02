import React from "react";
import Layout from "../components/layout";
import { Wrapper, styled } from "styles";

const Content = styled(Wrapper)``;

const EventsPage = () => (
  <Layout>
    <Content>
      <h1>EVENTS PAGE</h1>
      <p>Overzicht of evenementen</p>
    </Content>
  </Layout>
);

export default EventsPage;
