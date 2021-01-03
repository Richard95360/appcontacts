import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Interface/Header';
import Liste from './containers/Contact/Liste';
import {Provider} from './context';
import AddContact from './containers/Contact/AddContact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import APropos from './components/Pages/APropos'
import Erreur from './components/Pages/Erreur'


class App extends Component {
 
  
  render() {

    return ( 
      <Provider>
        <Router>
          <div className="App">
          <Header/>
          <div className="container">
            <Switch>
            <Route exact path="/ajoute" component={AddContact}/>
            <Route exact path="/liste" component={Liste}/>
            <Route exact path="/" component={Liste}/>
            <Route exact path="/apropos" component={APropos}/>
            <Route component={Erreur}/>
            </Switch>
          </div>
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;