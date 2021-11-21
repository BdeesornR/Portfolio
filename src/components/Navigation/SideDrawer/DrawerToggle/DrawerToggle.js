import styling from "./DrawerToggle.module.css";
import Logo from "../../../../assets/Logo/Logo";

const drawerToggle = (props) => (
  <div className={styling.DrawerToggle}>
    <div className={styling.logo_block} onClick={props.clicked}>
      <Logo />
    </div>
  </div>
);

export default drawerToggle;
