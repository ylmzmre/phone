import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addContact({
      ...this.state
    });
    this.setState({
        name: '',
        phone: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Ekleme Formu</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Ad Soyad"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Telefon Numarası"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-primary btn-sm">Kaydet</button>
        </form>
      </div>
    );
  }
}

export default Form;
