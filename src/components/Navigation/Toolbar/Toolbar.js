import styling from "./Toolbar.module.css";
import { logo } from "../../../assets/SVG/SVG";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={styling.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styling.Logo}>{logo}</div>
    <nav className={styling.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
