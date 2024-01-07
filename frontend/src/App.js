import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListInventoryComponent from './components/ListInventoryComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateInventoryComponent from './components/CreateInventoryComponent';
import ViewInventoryComponent from './components/ViewInventoryComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <Switch>
            <Route path="/" exact component={ListInventoryComponent}></Route>
            <Route path="/books" component={ListInventoryComponent}></Route>
            <Route path="/add-book/:id" component={CreateInventoryComponent}></Route>
            <Route path="/view-book/:id" component={ViewInventoryComponent}></Route>
          </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
