import React, { Component } from "react";

import Form from "./Form";
import List from "./List";

class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-3">
            <Form addContact={this.props.addContact}></Form>
          </div>
          <div className="col-md-6 col-sm-3">
            <List contacts={this.props.contacts}></List>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
