import React, { useState } from "react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../UI/Backdrop/Backdrop";

import hamburger from "../../assets/Slider/Hamburger/Hamburger.svg";
import counter from "../../assets/Slider/Counter/Counter.svg";
import grouping from "../../assets/Slider/Router_String/Router_String.svg";
import loanCrud from "../../assets/WorkPage/Loan_CRUD_square.jpg";
import galleryCrud from "../../assets/WorkPage/Gallery_CRUD_square.jpg";
import workImage from "../../assets/WorkPage/WorkPage.jpg";
import "./WorkPage.css";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const WorkPage = (props) => {
    const [backDropToggle, setBackdrop] = useState(false);
    const [renderedVideo, setVideo] = useState(null);

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

    const loanCrudVideo =
        "https://drive.google.com/file/d/1fFQYPOh0op8NQP-gAFDy9mwHoKbIXVrw/preview";
    const galleryCrudVideo =
        "https://drive.google.com/file/d/17H8gAdvuu8rW7kCH9ZDfEHKCgvs8ytds/preview";

    let winWidth = window.innerWidth;
    let slideNum = 1;
    let exampleTitle = [
        <h2>Burger Builder</h2>,
        <h2>Counter</h2>,
        <h2>Listing</h2>,
        <h2>Loan CRUD</h2>,
        <h2>Gallery CRUD</h2>,
    ];
    let exampleNavigation = [
        <p>Click image to Navigate</p>,
        <p>Click image to Preview</p>,
    ];
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
        <Aux>Program based on Laravel</Aux>,
        <Aux>
            Program based on Laravel <br />
            Vue and Vue2-Dropzone
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
            <Aux>Program based on Laravel</Aux>,
            <Aux>
                Program based on Laravel <br />
                Vue and Vue2-Dropzone
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
            <Aux>Program based on Laravel</Aux>,
            <Aux>
                Program based on Laravel <br />
                Vue <br />
                Vue2-Dropzone
            </Aux>,
        ];
    }

    const showVideo = (video) => {
        setBackdrop(true);
        setVideo(video);
    };

    const closeBackdrop = () => {
        setBackdrop(false);
        setVideo(null);
    };

    let videoPlayer = (
        <Aux>
            <Backdrop show={backDropToggle} clicked={closeBackdrop} />
            <iframe
                title="video_Player"
                className="video_player"
                src={renderedVideo}
                width="1020px"
                height="600px"
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
            />
        </Aux>
    );

    return (
        <div className="workPage">
            {backDropToggle ? videoPlayer : null}
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
                                    <p
                                        className="example_title"
                                        style={
                                            winWidth < 1200
                                                ? { display: "none" }
                                                : { display: "block" }
                                        }
                                    >
                                        {exampleTitle[0]}
                                        {exampleNavigation[0]}
                                    </p>
                                    <p className="example_info">
                                        {exampleInfo[0]}
                                    </p>
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
                                    <img
                                        className="card_pic"
                                        src={counter}
                                        alt="web_counter"
                                    />
                                </a>
                                <div className="example_block">
                                    <p
                                        className="example_title"
                                        style={
                                            winWidth < 1200
                                                ? { display: "none" }
                                                : { display: "block" }
                                        }
                                    >
                                        {exampleTitle[1]}
                                        {exampleNavigation[0]}
                                    </p>
                                    <p className="example_info">
                                        {exampleInfo[1]}
                                    </p>
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
                                    <img
                                        className="card_pic"
                                        src={grouping}
                                        alt="web_grouping"
                                    />
                                </a>
                                <div className="example_block">
                                    <p
                                        className="example_title"
                                        style={
                                            winWidth < 1200
                                                ? { display: "none" }
                                                : { display: "block" }
                                        }
                                    >
                                        {exampleTitle[2]}
                                        {exampleNavigation[0]}
                                    </p>
                                    <p className="example_info">
                                        {exampleInfo[2]}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card_border">
                            {cardImage}
                            <div className="card_background">
                                <div
                                    className="card_link"
                                    onClick={() => showVideo(loanCrudVideo)}
                                >
                                    <img
                                        className="card_pic"
                                        src={loanCrud}
                                        alt="loan_crud_video"
                                    />
                                </div>
                                <div className="example_block">
                                    <p
                                        className="example_title"
                                        style={
                                            winWidth < 1200
                                                ? { display: "none" }
                                                : { display: "block" }
                                        }
                                    >
                                        {exampleTitle[3]}
                                        {exampleNavigation[1]}
                                    </p>
                                    <p className="example_info">
                                        {exampleInfo[3]}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="card_border">
                            {cardImage}
                            <div className="card_background">
                                <div
                                    className="card_link"
                                    onClick={() => showVideo(galleryCrudVideo)}
                                >
                                    <img
                                        className="card_pic"
                                        src={galleryCrud}
                                        alt="gallery_crud_video"
                                    />
                                </div>
                                <div className="example_block">
                                    <p
                                        className="example_title"
                                        style={
                                            winWidth < 1200
                                                ? { display: "none" }
                                                : { display: "block" }
                                        }
                                    >
                                        {exampleTitle[4]}
                                        {exampleNavigation[1]}
                                    </p>
                                    <p className="example_info">
                                        {exampleInfo[4]}
                                    </p>
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

export default WorkPage;
