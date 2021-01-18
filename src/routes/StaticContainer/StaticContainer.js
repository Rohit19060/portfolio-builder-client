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

  componentDidMount() {
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
        } else {
          this.setState({ __html: content });
        }
      });
    });
  }

  HandleClick = () => {
    var x = this.state.__html;
    const element = document.createElement("a");
    const file = new Blob([x], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "Portfolio.html";
    document.body.appendChild(element);
    element.click();
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, projects, organization, github, linkedin } = ev.target;
    TemplateService.FormData({
      name: name.value,
      projects: projects.value,
      organization: organization.value,
      github: github.value,
      linkedin: linkedin.value,
    })
      .then((res) => {
        name.value = "";
        projects.value = "";
        organization.value = "";
        github.value = "";
        linkedin.value = "";
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
    window.location.reload(false);
  };

  render() {
    const { error, form } = this.state;
    return (
      <>
        {form ? (
          <form className="RegistrationForm" onSubmit={this.handleSubmit}>
            <h1 className=" mb-3 mt-3">
              <Link to="/">Portfolio Builder</Link>
            </h1>
            <h1 className="mb-3 mt-3 col_theme">Portfolio Details</h1>
            <div className="error-message">
              <p>{error}</p>
            </div>
            <div className="inputDiv">
              <label htmlFor="name">Name </label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="inputDiv">
              <label htmlFor="projects">Projects</label>
              <input type="text" name="projects" id="projects" required />
            </div>
            <div className="inputDiv">
              <label htmlFor="projects">Organization</label>
              <input
                type="text"
                name="organization"
                id="organization"
                required
              />
            </div>
            <section>
              <br />
              <h3>Contact Details</h3> <br />
              <div className="inputDiv">
                <label htmlFor="projects">Github</label>
                <input type="url" name="github" id="github" required />
              </div>
              <div className="inputDiv">
                <label htmlFor="projects">LinkedIn</label>
                <input type="url" name="linkedin" id="linkedin" required />
              </div>
              <br />
            </section>
            <div className="text-center mb-1 ">
              <input type="submit" value="Submit" />
            </div>
          </form>
        ) : (
          <>
            <Header />
            <div className="text-center Templated_Header">
              <Link to="/edit">
                <button className="download_button"> Edit Info </button>
              </Link>
              <button onClick={this.HandleClick} className="download_button">
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
