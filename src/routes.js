import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import App from './components/App';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Profil from './components/Profil';
import Upload from './components/Upload';
import Auth from './components/Auth';
import Edit from './components/Profil/edit.js';
import NotFound from './components/NotFound';




// create my component
const MyRoute = () => (
  <Router>
    <App name='layout'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/upload" component={Upload} />
        <Route path="/profil" component={Profil} />
        <Route path="/auth" component={Auth} />
        <Route path="/profil/edit" component={Edit} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default MyRoute;
