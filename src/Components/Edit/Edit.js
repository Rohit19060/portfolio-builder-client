import React, { Component } from "react";
import TemplateService from "../../services/template-service";
import { Link } from "react-router-dom";

export default class Edit extends Component {
  state = {
    error: null,
    name: "",
    projects: "",
    organization: "",
    github: "",
    linkedin: "",
  };

  componentDidMount() {
    TemplateService.getEditData().then((user) => {
      this.setState({
        name: user.name,
        projects: user.projects,
        organization: user.organization,
        github: user.github,
        linkedin: user.linkedin,
      });
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, projects, organization, github, linkedin } = ev.target;
    TemplateService.EditData({
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
        this.props.onEditSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const {
      error,
      name,
      projects,
      organization,
      github,
      linkedin,
    } = this.state;

    return (
      <>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <h2 className=" mb-3 mt-3">
            <Link to="/">Portfolio Builder</Link>
          </h2>
          <h1 className="mb-3 mt-3 col_theme">Edit Portfolio Details</h1>
          <div className="error-message">
            <p>{error}</p>
          </div>
          <div className="inputDiv">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="projects">Projects</label>
            <input
              type="text"
              name="projects"
              id="projects"
              value={projects}
              required
              onChange={this.onChange}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="projects">Organization</label>
            <input
              type="text"
              name="organization"
              id="organization"
              value={organization}
              required
              onChange={this.onChange}
            />
          </div>
          <section>
            <br />
            <h3>Contact Details</h3> <br />
            <div className="inputDiv">
              <label htmlFor="projects">Github</label>
              <label></label>
              <input
                type="url"
                name="github"
                id="github"
                required
                value={github}
                onChange={this.onChange}
              />
            </div>
            <div className="inputDiv">
              <label htmlFor="projects">LinkedIn </label>
              <input
                type="url"
                name="linkedin"
                id="linkedin"
                required
                value={linkedin}
                onChange={this.onChange}
              />
            </div>
          </section>
          <br />
          <div className="text-center mb-3 ">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </>
    );
  }
}
