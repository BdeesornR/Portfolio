import Logo from "../../../assets/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styling from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
  let attachedstyling = [styling.SideDrawer, styling.Close];
  if (props.open) {
    attachedstyling = [styling.SideDrawer, styling.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedstyling.join(" ")} onClick={props.closed}>
        <div className={styling.logo_div}>
          <div className={styling.logo_block}>
            <Logo />
          </div>
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
