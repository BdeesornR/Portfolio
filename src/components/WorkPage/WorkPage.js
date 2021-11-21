import React from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import hamburger from "../../assets/Slider/Hamburger/Hamburger.svg";
import counter from "../../assets/Slider/Counter/Counter.svg";
import grouping from "../../assets/Slider/Router_String/Router_String.svg";
import workImage from "../../assets/WorkPage/WorkPage.jpg";
import "./WorkPage.css";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const workPage = (props) => {
  const cardImage = (
    <img
      src={workImage}
      alt="card_background_image"
      style={{
        zIndex: "-10",
        width: "1000px",
        height: "1000px",
        position: "absolute",
      }}
    />
  );

  let winWidth = window.innerWidth;
  let slideNum = 1;
  let exampleInfo = [
    <Aux>
      Program based on React.js <br />
      notable dependencies <br />
      React, React Router, Redux, prop-types
    </Aux>,
    <Aux>
      Program based on React.js <br />
      notable dependencies <br />
      React, Redux
    </Aux>,
    <Aux>
      Program based on React.js <br />
      notable dependencies <br />
      React, React Router, Redux
    </Aux>,
  ];

  if (winWidth >= 480 && winWidth < 768) {
    slideNum = 2;
  }

  if (winWidth >= 768 && winWidth < 1200) {
    slideNum = 2;
    exampleInfo = [
      <Aux>
        Program based on React.js <br />
        notable dependencies <br />
        React, React Router, Redux, prop-types
      </Aux>,
      <Aux>
        Program based on React.js <br />
        notable dependencies <br />
        React, Redux
      </Aux>,
      <Aux>
        Program based on React.js <br />
        notable dependencies <br />
        React, React Router, Redux
      </Aux>,
    ];
  }

  if (winWidth >= 1200) {
    slideNum = 2;
    exampleInfo = [
      <Aux>
        Program based on React.js <br />
        notable dependencies <br />
        React <br />
        React Router <br />
        Redux <br />
        prop-types
      </Aux>,
      <Aux>
        Program based on React.js <br />
        notable dependencies <br />
        React <br />
        Redux
      </Aux>,
      <Aux>
        Program based on React.js <br />
        notable dependencies <br />
        React <br />
        React Router <br />
        Redux
      </Aux>,
    ];
  }

  return (
    <div className="workPage">
      <p className="headline">Showcase</p>
      <div className="carousel">
        <div className="swiper-button-prev" />
        <div className="carousel_pagination">
          <Swiper
            slidesPerView={slideNum}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
          >
            <SwiperSlide className="card_border">
              {cardImage}
              <div className="card_background">
                <a
                  className="card_link"
                  href="https://burger-builder-a5c59.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card_pic"
                    src={hamburger}
                    alt="web_hamburger"
                  />
                </a>
                <div className="example_block">
                  <p className="example_info">{exampleInfo[0]}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card_border">
              {cardImage}
              <div className="card_background">
                <a
                  className="card_link"
                  href="https://counter-d17ba.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="card_pic" src={counter} alt="web_counter" />
                </a>
                <div className="example_block">
                  <p className="example_info">{exampleInfo[1]}</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card_border">
              {cardImage}
              <div className="card_background">
                <a
                  className="card_link"
                  href="https://grouping-9dd2f.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="card_pic" src={grouping} alt="web_grouping" />
                </a>
                <div className="example_block">
                  <p className="example_info">{exampleInfo[2]}</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination" />
        </div>
        <div className="swiper-button-next" />
      </div>
      <div />
    </div>
  );
};

export default workPage;
