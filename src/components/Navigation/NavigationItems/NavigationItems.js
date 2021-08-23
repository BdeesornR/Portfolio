import React from "react";

import * as linkName from "../../../containers/FullPage/FullPage_link";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems} id="menu">
    <NavigationItem link={linkName.main_page}>Main</NavigationItem>
    <NavigationItem link={linkName.info_page}>My Skills</NavigationItem>
    <NavigationItem link={linkName.work_page}>Showcase</NavigationItem>
  </ul>
);

export default navigationItems;
