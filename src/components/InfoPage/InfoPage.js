import infoImage from "../../assets/InfoPage/InfoPage.png";
import adobePhotoshop from "../../assets/Logo/Adobe_Photoshop.svg";
import css3 from "../../assets/Logo/CSS3.svg";
import git from "../../assets/Logo/Git.svg";
import html5 from "../../assets/Logo/HTML5.svg";
import javaScript from "../../assets/Logo/JavaScript.svg";
import reactIcon from "../../assets/Logo/React_Icon.svg";
import reactRouter from "../../assets/Logo/React_Router.svg";
import reduxIcon from "../../assets/Logo/Redux.svg";
import "./InfoPage.css";

const infoPage = () => {
  return (
    <div className="infoPage">
      <p className="headline">My Skills</p>
      <div className="info_circle">
        <div className="bullet" style={{ left: "50%" }}>
          <img
            className="info_picture"
            src={infoImage}
            alt="designed by vectorjuice"
          />
        </div>
        <div
          className="bullet"
          style={{
            left: "28%",
            transform: "rotate(216deg) translateX(37.5vh)",
          }}
        >
          <div className="skill" style={{ transform: "rotate(-216deg)" }}>
            <p className="icon_tag">React</p>
            <img src={reactIcon} alt="react_icon" />
          </div>
        </div>
        <div
          className="bullet"
          style={{
            left: "50%",
            transform: "rotate(-36deg) translateX(37.5vh)",
          }}
        >
          <div className="skill" style={{ transform: "rotate(36deg)" }}>
            <img src={reduxIcon} alt="redux_icon" />
            <p className="icon_tag">Redux</p>
          </div>
        </div>
        <div
          className="bullet"
          style={{
            left: "28%",
            transform: "rotate(191deg) translateX(37.5vh)",
          }}
        >
          <div className="skill" style={{ transform: "rotate(-191deg)" }}>
            <p className="icon_tag">HTML</p>
            <img src={html5} alt="HTML5_icon" />
          </div>
        </div>
        <div
          className="bullet"
          style={{
            left: "51%",
            transform: "rotate(-11deg) translateX(37.5vh)",
          }}
        >
          <div className="skill" style={{ transform: "rotate(11deg)" }}>
            <img src={javaScript} alt="javaScript_icon" />
            <p className="icon_tag">JavaScript</p>
          </div>
        </div>
        <div
          className="bullet"
          style={{
            left: "33%",
            transform: "rotate(169deg) translateX(37.5vh)",
          }}
        >
          <div className="skill" style={{ transform: "rotate(-169deg)" }}>
            <p className="icon_tag">CSS</p>
            <img src={css3} alt="CSS3_icon" />
          </div>
        </div>
        <div
          className="bullet"
          style={{ left: "50%", transform: "rotate(11deg) translateX(37.5vh)" }}
        >
          <div className="skill" style={{ transform: "rotate(-11deg)" }}>
            <img src={reactRouter} alt="reactRouter_icon" />
            <p className="icon_tag">React Router</p>
          </div>
        </div>
        <div
          className="bullet"
          style={{
            left: "34%",
            transform: "rotate(144deg) translateX(37.5vh)",
          }}
        >
          <div className="skill" style={{ transform: "rotate(-144deg)" }}>
            <p className="icon_tag">Git</p>
            <img src={git} alt="git_icon" />
          </div>
        </div>
        <div
          className="bullet"
          style={{ left: "50%", transform: "rotate(36deg) translateX(37.5vh)" }}
        >
          <div className="skill" style={{ transform: "rotate(-36deg)" }}>
            <img src={adobePhotoshop} alt="adobePhotoshop_icon" />
            <p className="icon_tag">Adobe Photoshop</p>
          </div>
        </div>
      </div>
      <a
        className="picture_info"
        href="https://www.freepik.com/vectors/abstract"
        target="_blank"
        rel="noreferrer"
      >
        Picture designed by vectorjuice
      </a>
    </div>
  );
};

export default infoPage;
