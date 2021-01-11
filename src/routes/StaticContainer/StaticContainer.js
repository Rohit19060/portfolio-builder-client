import React, { Component } from "react";
import TokenService from "../../services/token-service";
import TemplateService from "../../services/template-service";
import { Link } from "react-router-dom";
import config from "../../config";
import "./StaticContainer.css";
import Header from "./../../Components/Header/Header";
export default class StaticContainer extends Component {
  state = {
    __html: "",
    form: false,
    error: null,
  };

  GetTempalte = () => {
    const id = window.location.href.substring(
      window.location.href.lastIndexOf("/") + 1
    );

    fetch(
      `${
        config.API_ENDPOINT
      }/templates?id=${id}&token=${TokenService.getAuthToken()}`
    ).then((res) => {
      res.text().then((content) => {
        if (content === "Form") {
          this.setState({ form: true });
        }
        this.setState({
          __html: content,
        });
      });
    });
  };
  componentDidMount() {
    this.GetTempalte();
  }

  handleclick = () => {
    var x = this.state.__html;
    const element = document.createElement("a");
    const file = new Blob([x], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "portfolio.html";
    document.body.appendChild(element);
    element.click();
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { name, projects, organization } = ev.target;
    TemplateService.FormData({
      name: name.value,
      projects: projects.value,
      organization: organization.value,
    })
      .then((res) => {
        name.value = "";
        projects.value = "";
        organization.value = "";
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
    this.setState({ form: false });
    this.GetTempalte();
  };
  render() {
    const { error } = this.state;
    return (
      <>
        {this.state.form ? (
          <form className="RegistrationForm" onSubmit={this.handleSubmit}>
            <h1 className=" mb-3 mt-3">
              <Link to="/">Portfolio Builder</Link>
            </h1>
            <h1 className="mb-3 mt-3 col_theme">Portfolio Details</h1>
            <div className="error-message">
              <p>{error}</p>
            </div>
            <div className="inputdiv">
              <label htmlFor="name">Name </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="inputdiv">
              <label htmlFor="projects">Projects</label>
              <input type="text" name="projects" id="projects" required />
            </div>
            <div className="inputdiv">
              <label htmlFor="projects">Organization</label>
              <input
                type="text"
                name="organization"
                id="organization"
                required
              />
            </div>
            <br />
            <div className="text-center mb-1 ">
              <input type="submit" value="Submit" />
            </div>
          </form>
        ) : (
          <>
            <Header />
            <div className="text-center Templated_Header">
              <button onClick={this.handleclick} className="download_button">
                Download
              </button>
            </div>
            <div dangerouslySetInnerHTML={this.state} id="template" />
          </>
        )}
      </>
    );
  }
}
