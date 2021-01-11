import React, { Component } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import config from "../../config";
import "./GetStarted.css";
export default class GetStarted extends Component {
  state = { count: 0 };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/templates/count`).then((res) => {
      res.json().then((content) => {
        this.setState({ count: content.count });
      });
    });
  }
  rendertemplates() {
    var rows = [];
    for (var i = 1; i <= this.state.count; i++) {
      rows.push(
        <Link to={`/templates/${i}`} key={i} className="item text-center">
          <h3>Template {i}</h3>
        </Link>
      );
    }
    return rows;
  }
  render() {
    return (
      <div>
        <Header />
        <h1 className="text-center title_x">Welcome</h1>
        <h4 className="text-center sub_x">
          Build a beautiful portfolio in minutes by choosing templates.
        </h4>
        <section className="container_x">{this.rendertemplates()}</section>
        <div className="text-center sub_x">
          Want to create a welcome page/portfolio instead
        </div>
      </div>
    );
  }
}
