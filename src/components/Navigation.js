import React, { useEffect, useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";

import logo from '../static/logo.png';

function Navigation() {

  return (

    <div className="Navigation">
      <Container>
        <div className="Navigation_Container">
          <a href="/"><img
            src={logo}
            alt=""
          /></a>

          <div className="Navigation_Links">
            <ul>
              <li className="Navigation_Link_Mobile"><a href="/">Home</a></li>
              <li className="Navigation_Link_Mobile"><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>

  );
}

export default Navigation;