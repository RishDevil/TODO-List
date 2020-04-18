import React, { Component } from "react";

import fire from "../content/content";
import Input from "./input";
import Output from "./output";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import Style1 from "../cssFiles/todo.module.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid(),
      item: "",
      edit: false
    };
    this.uid = this.props.userid;
    this.data = fire
      .database()
      .ref("notes")
      .child(this.uid);
  }

  componentDidMount() {
    let previtem = this.state.items;

    this.data.on("child_added", snap => {
      previtem.push({
        id: snap.key,
        title: snap.val().title
      });
      this.setState({
        items: previtem
      });
    });

    this.data.on("child_changed", snap => {
      for (var i = 0; i < previtem.length; i++) {
        if (previtem[i].id == snap.key) {
          previtem[i].title = snap.val().title;
        }
      }

      this.setState({
        items: previtem
      });
    });

    this.data.on("child_removed", snap => {
      for (var i = 0; i < previtem.length; i++) {
        if (previtem[i].id == snap.key) {
          previtem.splice(i, 1);
        }
      }
      this.setState({
        items: previtem
      });
    });
  }

  handlechange = e => {
    this.setState({ item: e.target.value });
  };
  handleclear = () => {
    const item = [];
    this.setState({
      items: item
    });
  };

  handlesubmit = e => {
    e.preventDefault();
    if (!this.state.item) {
      return;
    }
    if (!this.state.edit) {
      this.data.push().set({
        title: this.state.item
      });
    } else {
      this.data.child(this.state.id).update({
        title: this.state.item
      });
    }

    this.setState({
      id: uuid(),
      item: "",
      edit: false
    });
  };

  handledelete = id => {
    this.data.child(id).remove();
  };

  handleedit = id => {
    const it = this.state.items.filter(item => item.id != id);
    const selecteditem = this.state.items.find(item => item.id === id);
    console.log(selecteditem);

    this.setState({
      items: it,
      item: selecteditem.title,
      id: selecteditem.id,
      edit: true
    });
  };

  render() {
    console.log("class name");
    let c = Style1.tod;
    console.log(c);
    return (
      <div className={Style1.tod}>
        <div className={Style1.tod1}>
          <div className="container bg-secondary border   ">
            <div className="navbar navbar-expand-sm bg-secondary justify-content-center">
              <div className="navbar-item font-weight-bold text-uppercase">
                todo list
              </div>
            </div>
            <div className="row">
              <div className="col-1 mx-auto col-sm-10 mt-5">
                <Input
                  handlechange={this.handlechange}
                  item={this.state.item}
                  handlesubmit={this.handlesubmit}
                  edit={this.state.edit}
                />
                <Output
                  item={this.state.items}
                  handledelete={this.handledelete}
                  handleedit={this.handleedit}
                  handleclear={this.handleclear}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
