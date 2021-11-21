import styling from "./Toolbar.module.css";
import Logo from "../../../assets/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={styling.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styling.logo_div}>
      <div className={styling.logo_block}>
        <Logo />
      </div>
    </div>
    <nav className={styling.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
