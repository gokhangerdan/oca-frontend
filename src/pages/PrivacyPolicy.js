import React, { Component } from "react";
import { Button, Container, Grid } from "@material-ui/core";

import Navigation from '../components/Navigation.js';
import Article from '../components/Article.js';


class PrivacyPolicy extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Article />
        </Container>
      </div>
    );
  }
}

export default PrivacyPolicy;