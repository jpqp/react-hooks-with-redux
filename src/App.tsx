import React, { useReducer, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// Firebase
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

// コンポーネント
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Event from './components/Event'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Event} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
