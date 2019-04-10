import React from "react";
import { headerContainer as HeaderContainer } from "./includes/Header";
import { navigation as Navigation } from "./includes/Navigation";
import { footer as Footer } from "./includes/Footer";
import { main as Main } from "./Main";

export class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <a href="#navigation" className="sr-only">Skip navigation</a>
                <HeaderContainer>
                    <Navigation />
                </HeaderContainer>
                <div id="toggleMain" className="toggleMain">
                    <a className="sr-only" name="navigation"></a>
                    <main>
                        <a className="sr-only" name="navigation"></a>
                        <div className="main">
                            {this.props.children}
                        </div>
                    </main>
                    <Footer />
                    <div className="scrollTop--cont">
                        <button id="js-scrollTop" className="btn btn-default btn-success scrollTop">
                            <i className="fa fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = {
    mainContainer: MainContainer
}