import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    date: this.minDate,
  };

  hamdldeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  hamdldeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    // console.log("dodwanie elementu");
    const { text, date } = this.state;

    const add = this.props.add(text, date);
  };

  render() {
    return (
      <div>
        <p>Dodaj przedmiot</p>
        <input
          type="text"
          placeholder="Dodaj przedmiot"
          value={this.state.text}
          onChange={this.hamdldeText}
        />
        <br />
        <label htmlFor="date">Podaj datę</label>
        <input
          type="date"
          value={this.state.date}
          onChange={this.hamdldeDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
