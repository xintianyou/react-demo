import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputRef: React.createRef(),
      todoList: [],
    };
  }
  render() {
    return (
      <div>
        <h1>todoList</h1>
        <div className="form">
          <label htmlFor="thing">事件</label>
          <input
            id="thing"
            ref={this.state.inputRef}
            placeholder="事件"
            onKeyUp={this.onKeyup}
          ></input>
          <button onClick={() => this.handleClick()}>添加</button>
        </div>
        <div>
          {this.state.todoList.map((item) => (
            <p className="todo-list-item" key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => this.handleCollect(item)}>
                {item.collected ? "取消收藏" : "收藏"}
              </button>
              <button onClick={() => this.handleDel(item)}>删除</button>
            </p>
          ))}
        </div>
      </div>
    );
  }

  handleClick() {
    console.log("handleClick");
    console.log();
    const event = this.state.inputRef.current.value;
    const list = this.state.todoList;
    if (event !== "") {
      list.push({
        id: Math.random() * 1000,
        text: event,
        collected: false,
      });
    }
    this.setState({
      todoList: list,
    });
  }
  onKeyup = (e) => {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  };
  handleCollect(item) {
    let list = this.state.todoList;
    const idx = list.findIndex((el) => el.id === item.id);
    list[idx].collected = !list[idx].collected;
    this.setState({
      todoList: list,
    });
  }
  handleDel(item) {
    let list = this.state.todoList;
    const idx = list.findIndex((el) => el.id === item.id);
    list.splice(idx, 1);
    this.setState({
      todoList: list,
    });
  }
}
export default Home;
