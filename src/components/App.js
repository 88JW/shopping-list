import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 3;

  state = {
    tasks: [
     
     
    ],
  };

  // metoda usiwania elementów

  dalateTask = (id) => {
    console.log("Delete z listy" + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    // console.log(tasks);

    this.setState({
      tasks: tasks,
    });
  };

  // zmiana statusu zakupka

  changeActive = (id) => {
    console.log("NotActive" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, active, finish) => {
    // console.log("dodany nowy obiekt");
    const task = {
      id: this.counter,
      text: text,
      date: date,
      active: true,
      finish: null,
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div>
        <h1>Aplikacja zakupowa</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.dalateTask}
          change={this.changeActive}
        />
      </div>
    );
  }
}

export default App;
