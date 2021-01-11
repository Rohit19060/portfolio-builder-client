import React, { Component } from "react";
import Header from "../Header/Header";
import "./HowToUse.css";

export default class HowToUse extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="howtouse">
          <h2 className="text-center">
            If you want to make your Portfolio for free, then you came at right
            place. you can generate your portfolio in few steps
          </h2>
          <br />
          <table className="steps">
            <thead>
              <tr>
                <td>Step I </td>
                <td>Register Your self</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Step II </td>
                <td>Log In</td>
              </tr>
              <tr>
                <td>Step III </td>
                <td>
                  Choose Template and your will see a form that you need to fill
                </td>
              </tr>
              <tr>
                <td>Step IV </td>
                <td>
                  Download Template and that's sit you get your simple
                  portfolio.
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </>
    );
  }
}
