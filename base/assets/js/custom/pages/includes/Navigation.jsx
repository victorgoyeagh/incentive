import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";

export class Navigation extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="general">General</Link></li>
                <li className="dropdown">
                    <Link to="modules" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Modules <span className="caret"></span></Link>
                    <ul className="dropdown-menu" role="menu">
                        <li><Link to="/modules/contactlist">Contact List</Link></li> 
                        <li><Link to="modules">Module Two</Link></li>
                        <li><Link to="modules">Module Three</Link></li>
                    </ul>
                </li>
                <li className="dropdown dropdown--fullwidth">
                    <Link to="forms" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Forms<span className="caret"></span></Link>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-cont">
                            <div className="row">
                                <ul className="list-unstyled col-xs-12 col-sm-6 col-md-3">
                                    <li><Link to="forms">Form First Link</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                </ul>
                                <ul className="list-unstyled col-xs-12 col-sm-6 col-md-3">
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                </ul>
                                <ul className="list-unstyled col-xs-12 col-sm-6 col-md-3">
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                </ul>
                                <ul className="list-unstyled col-xs-12 col-sm-6 col-md-3">
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form One</Link></li>
                                    <li><Link to="forms">Form Last Link</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}

module.exports = {
    navigation: Navigation
}