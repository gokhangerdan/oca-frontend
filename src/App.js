import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './App.scss';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />
      </Router>
    </div>
  );
}

export default App;