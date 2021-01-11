import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Homepage.css";
export default class Homepage extends Component {
                 state = {};
                 render() {
                   return (
                     <>
                       <Header />
                       <div className="main_div">
                         <h1 className="text-center title">
                           Time to make your own Portfolio
                         </h1>
                         <h3 className="text-center sub">
                           If you want to make your Portfolio for free, then you
                           came at right place. you can generate your portfolio
                           in few steps
                         </h3>

                         <div className="sub_buttons">
                           <Link
                             to="/get-started"
                             className="getstarted text-center"
                           >
                             Get Started
                           </Link>
                           <Link
                             to="/howtouse"
                             className="getstarted text-center"
                           >
                             How to use it
                           </Link>
                         </div>
                       </div>
                     </>
                   );
                 }
               }
