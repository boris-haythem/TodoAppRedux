import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idToEdit: "",
      taskToEdit: "",
      taskFromInput: "",
      editSimple:false
    };
  }

  handleChange = event => {
    this.setState({
      idToEdit: event.target.getAttribute("data-id"),
      taskToEdit: event.target.textContent
    });
  };

  handleInputChange = event => {
    this.setState({
      taskFromInput: event.target.value
    });
  };

  handleSendEdit = (i) => {
      this.setState({editSimple:true,taskToEdit:""})
    this.props.handleClickEdit(i, this.state.taskToEdit);
  };

  handleSendAdd = () => {
    this.setState({
      taskFromInput: ""
    });
    this.props.handleClickAdd(this.state.taskFromInput);
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className="container">
        <div className="task-input">
          <h1 className="title">TO-DO APP</h1>
          <span style={{ float: "right" }}>Add New Todo</span>
          <input
            className="input-inner"
            onChange={this.handleInputChange}
            type="text"
            value={this.state.taskFromInput}
          />
          <button className="btn btn-primary" onClick={this.handleSendAdd}>
            ADD
          </button>
        </div>
        <div>
          <ul>
            {tasks.map((el, i) => {
              return (
                <li>
                  <p
                    contenteditable="true"
                    data-id={i}
                    onInput={this.handleChange}
                    style={{
                      color: "red",
                      textDecoration: el.isDone ? "line-through" : ""
                    }}
                  >
                    {el.task}
                  </p>
                  <button onClick={() => this.handleSendEdit(i)}>Edit</button>
                  <button onClick={() => this.props.handleClickComplete(i)}>
                    complete
                  </button>
                  <button onClick={() => this.props.handleClickDelete(i)}>
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Todo;
