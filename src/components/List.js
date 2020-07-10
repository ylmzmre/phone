import React, { Component } from "react";
import Loading from "./Loading";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  onChangeFilter(e) {
    this.setState({
      filterText: e.target.value
    });
  }
  render() {
    const filteredContacts = this.props.contacts.filter(item => {
      if (item.name !== undefined || item.phone !== undefined) {
        return (
          item.name
            .toLowerCase()
            .indexOf(this.state.filterText.toLocaleLowerCase()) !== -1
        );
      }
      return null;
    });
    return (
      <div>
        <h1>İletişim</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="filter"
            name="filter"
            placeholder="Arama"
            value={this.state.filterText}
            onChange={this.onChangeFilter}
          />
          <div className="my-2"></div>
          {filteredContacts.length === 0 ? <Loading /> : null}
          <ul className="list-group">
            {filteredContacts.map((item, index) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                  key={index}
                >
                  {item.name}
                  <span className="badge badge-info">{item.phone}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
