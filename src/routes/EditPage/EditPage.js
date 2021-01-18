import React, { Component } from "react";
import Edit from "../../Components/Edit/Edit";

export default class EditPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleEditSuccess = (user) => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    return (
      <>
        <Edit onEditSuccess={this.handleEditSuccess} />
      </>
    );
  }
}
