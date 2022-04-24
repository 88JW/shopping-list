import React from "react";

const Task = (props) => {
  const { text, date, id } = props.task;

  return (
    <div>
      <p>
        {text} {date}{" "}
        <button onClick={() => props.change(id)}> Zostało kupione</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
  );
};

export default Task;
