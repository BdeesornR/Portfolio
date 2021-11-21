import {
  FaFacebookSquare,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaEnvelope,
} from "react-icons/fa";
import styling from "./MainPage.module.css";

const mainPage = (props) => {
  let icon_add_info = null;
  const textBoxStyling = [styling.fall_in, styling.fall_out];
  let textBoxIDArray = [styling.textBox];

  if (props.textBoxState === "fall_in") {
    textBoxIDArray.push(textBoxStyling[0]);
  } else if (props.textBoxState === "fall_out") {
    textBoxIDArray.push(textBoxStyling[1]);
  } else {
    textBoxIDArray.filter((word) => word === styling.textBox);
  }

  if (props.iconInfo != null) {
    if (props.iconInfo === "facebook") {
      icon_add_info = (
        <a
          id={styling.link}
          href="https://www.facebook.com/Give.me.a.big.hand"
          target="_blank"
          rel="noreferrer"
        >
          Here lies a link to Facebook
        </a>
      );
    }
    if (props.iconInfo === "linkedin") {
      icon_add_info = (
        <a
          id={styling.link}
          href="https://www.linkedin.com/in/bdeesorn-rukprayoon-475917180"
          target="_blank"
          rel="noreferrer"
        >
          Here is a link to LinkedIn
        </a>
      );
    }
    if (props.iconInfo === "phone") {
      icon_add_info = (
        <a id={styling.link} href="tel:+66917974552" rel="noreferrer">
          Call Me: (+66)80-930-1148
        </a>
      );
    }
    if (props.iconInfo === "mail") {
      icon_add_info = (
        <a
          id={styling.link}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bdeesorn@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Mail Me: bdeesorn@gmail.com
        </a>
      );
    }
  }

  return (
    <div className={styling.mainpage}>
      <div className={styling.name}>BDEESORN RUKPRAYOON</div>
      <div className={styling.occupation}>FRONT-END DEVELOPER</div>
      <div className={styling.line} />
      <div className={styling.icon_block}>
        <div className={styling.icon_click}>
          <FaFacebookSquare
            className={styling.icon_facebook}
            onClick={() => props.clicked("facebook")}
          />
        </div>
        <div className={styling.icon_click}>
          <FaLinkedin
            className={styling.icon_linkedin}
            onClick={() => props.clicked("linkedin")}
          />
        </div>
        <div className={styling.icon_click}>
          <FaPhoneSquareAlt
            className={styling.icon_phone}
            onClick={() => props.clicked("phone")}
          />
        </div>
        <div className={styling.icon_click}>
          <FaEnvelope
            className={styling.icon_mail}
            onClick={() => props.clicked("mail")}
          />
        </div>
      </div>
      <div style={{ height: "4vh" }}>
        <p className={textBoxIDArray.join(" ")}>{icon_add_info}</p>
      </div>
    </div>
  );
};

export default mainPage;
