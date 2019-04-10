import React from "react";
import ReactDom from "react-dom";
import { Link } from "react-router";

export class HeaderContainer extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                    <div className="container">
                        <nav className="navbar">
                            <div className="container">
                                <div id="toggleHeader" className="navbar-header">
                                    <button id="toggleBtn" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link className="navbar-brand" to="/">
                                        <img src="/assets/images/default/logo-blk.png" alt="Incentive" />
                                    </Link>
                                </div>
                                <div id="toggleNav" className="navbar-collapse collapse">
                                    <div id="mCustomScrollbar" className='scroll-content'>
                                        {this.props.children}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = {
    headerContainer: HeaderContainer
}