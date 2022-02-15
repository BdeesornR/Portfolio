import infoImage from "../../assets/InfoPage/InfoPage.png";
import vue from "../../assets/InfoPage/Logo/Vue.svg";
import css3 from "../../assets/InfoPage/Logo/CSS3.svg";
import git from "../../assets/InfoPage/Logo/Git.svg";
import html5 from "../../assets/InfoPage/Logo/HTML5.svg";
import javaScript from "../../assets/InfoPage/Logo/JavaScript.svg";
import reactIcon from "../../assets/InfoPage/Logo/React_Icon.svg";
import laravel from "../../assets/InfoPage/Logo/Laravel.svg";
import reduxIcon from "../../assets/InfoPage/Logo/Redux.svg";
import "./InfoPage.scoped.css";

const cal = (deg) => {
    const rad = (Math.abs(deg) * Math.PI) / 180;
    return Math.cos(rad);
};

const infoPage = () => {
    let winWidth = window.innerWidth;
    let deg = [240, -60, 210, -30, 150, 30, 120, 60];
    let transX = [
        70 / cal(60),
        70 / cal(60),
        70 / cal(30),
        70 / cal(30),
        70 / cal(30),
        70 / cal(30),
        70 / cal(60),
        70 / cal(60),
    ];

    if (winWidth >= 480 && winWidth < 678) {
        deg = [243, -72, 214, -45, 146, 45, 117, 72];
        transX = [
            60 / cal(63),
            40 / cal(72),
            60 / cal(34),
            40 / cal(45),
            60 / cal(34),
            40 / cal(45),
            60 / cal(63),
            40 / cal(72),
        ];
    }

    if (winWidth >= 678 && winWidth < 1200) {
        deg = [216, -36, 191, -11, 169, 11, 144, 36];
        transX = [180, 180, 180, 180, 180, 180, 180, 180];
    }

    if (winWidth >= 1200) {
        deg = [216, -36, 191, -11, 169, 11, 144, 36];
        transX = [280, 280, 280, 280, 280, 280, 280, 280];
    }

    return (
        <div className="infoPage">
            <p className="headline">My Skills</p>
            <div className="content_block">
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
                            right: "50%",
                            transform: `rotate(${deg[0] + "deg"}) 
              				translateX(${transX[0] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[0] + "deg"})` }}
                        >
                            <p className="icon_tag">React</p>
                            <img src={reactIcon} alt="react_icon" />
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            left: "50%",
                            transform: `rotate(${deg[1] +
                                "deg"}) translateX(${transX[1] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[1] + "deg"})` }}
                        >
                            <img src={reduxIcon} alt="redux_icon" />
                            <p className="icon_tag">Redux</p>
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            right: "50%",
                            transform: `rotate(${deg[2] +
                                "deg"}) translateX(${transX[2] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[2] + "deg"})` }}
                        >
                            <p className="icon_tag">HTML</p>
                            <img src={html5} alt="HTML5_icon" />
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            left: "51%",
                            transform: `rotate(${deg[3] + "deg"}) 
              				translateX(${transX[3] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[3] + "deg"})` }}
                        >
                            <img src={javaScript} alt="javaScript_icon" />
                            <p className="icon_tag">JavaScript</p>
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            right: "50%",
                            transform: `rotate(${deg[4] + "deg"}) 
              				translateX(${transX[4] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[4] + "deg"})` }}
                        >
                            <p className="icon_tag">CSS</p>
                            <img src={css3} alt="CSS3_icon" />
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            left: "50%",
                            transform: `rotate(${deg[5] + "deg"}) 
              				translateX(${transX[5] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[5] + "deg"})` }}
                        >
                            <img src={laravel} alt="laravel_icon" />
                            <p className="icon_tag">Laravel</p>
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            right: "50%",
                            transform: `rotate(${deg[6] + "deg"}) 
              				translateX(${transX[6] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[6] + "deg"})` }}
                        >
                            <p className="icon_tag">Git</p>
                            <img src={git} alt="git_icon" />
                        </div>
                    </div>
                    <div
                        className="bullet"
                        style={{
                            left: "50%",
                            transform: `rotate(${deg[7] + "deg"}) 
              				translateX(${transX[7] + "px"})`,
                        }}
                    >
                        <div
                            style={{ transform: `rotate(${-deg[7] + "deg"})` }}
                        >
                            <img src={vue} alt="vue_icon" />
                            <p className="icon_tag">Vue</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a
                    className="picture_info"
                    href="https://www.freepik.com/vectors/abstract"
                    target="_blank"
                    rel="noreferrer"
                >
                    Picture designed by vectorjuice
                </a>
            </div>
        </div>
    );
};

export default infoPage;
