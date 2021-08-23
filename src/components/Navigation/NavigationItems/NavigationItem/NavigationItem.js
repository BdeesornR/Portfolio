import React from "react";
import "@fullpage/react-fullpage";
import "./NavigationItem.scoped.css";

const navigationItem = (props) => (
  <li data-menuanchor={props.link} className="NavigationItem">
    <a href={"#" + props.link}>{props.children}</a>
  </li>
);

export default navigationItem;
