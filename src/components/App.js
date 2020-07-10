import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as firebase from "firebase";
import { DB_CONFIG } from "../config/Config";

import Contacts from "./Contacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.addContact = this.addContact.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child("contacts");
  }

  componentWillMount() {
    const { contacts } = this.state;

    this.database.on("child_added", snap => {
      contacts.push({
        name: snap.val().name,
        phone: snap.val().phone
      });
      this.setState({
        contacts: contacts
      });
    });
  }

  addContact(contact) {
    this.database.push({ name: contact.name, phone: contact.phone });
  }

  render() {
    return (
      <div className="container">
        <header></header>
        <Contacts contacts={this.state.contacts} addContact={this.addContact} />
        <footer></footer>
      </div>
    );
  }
}

export default App;
