import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddContact from "./Components/addContact";
import Header from "./Components/header";
import ListContact from "./Components/listContacts";

import UpdateContactList from "./Components/UpdateContactList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route exact path="/contact/:id" component={UpdateContactList} />
            <Route exact path="/contacts" component={ListContact} />
            <Route exact path="/add_contact" component={AddContact} />
          </Switch>
        </header>
      </div>
    );
  }
}
export default App;
