import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import * as linkName from "./FullPage_link";
import MainPage from "../../components/MainPage/MainPage";
import InfoPage from "../../components/InfoPage/InfoPage";
import WorkPage from "../../components/WorkPage/WorkPage";
import "./FullPage.css";

class fullPage extends Component {
    state = {
        iconInfo: null,
        textBoxState: null,
    };

    iconInfoHandler = (icon_type) => {
        if (this.state.iconInfo == null) {
            this.setState({ iconInfo: icon_type, textBoxState: "fall_in" });
        } else {
            this.setState({ textBoxState: "fall_out" });
            setTimeout(
                () =>
                    this.setState({
                        iconInfo: icon_type,
                        textBoxState: "fall_in",
                    }),
                1000
            );
        }
    };

    render() {
        let pageContent = (
            <Aux>
                <div className="section" data-anchor={linkName.main_page}>
                    <MainPage
                        iconInfo={this.state.iconInfo}
                        textBoxState={this.state.textBoxState}
                        clicked={this.iconInfoHandler}
                        reset={this.iconInfoResetHandler}
                    />
                </div>
                <div className="section" data-anchor={linkName.info_page}>
                    <InfoPage />
                </div>
                <div className="section" data-anchor={linkName.work_page}>
                    <WorkPage />
                </div>
            </Aux>
        );

        return (
            <ReactFullpage
                navigation
                licenseKey={"?weMI#G!d1"}
                menu={"#menu"}
                recordHistory={false}
                scrollingSpeed={1000}
                style={{ backgroundColor: "yellow" }}
                render={() => (
                    <ReactFullpage.Wrapper>{pageContent}</ReactFullpage.Wrapper>
                )}
            />
        );
    }
}

export default fullPage;
