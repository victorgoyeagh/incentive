import React from 'react';
import ReactDOM from 'react-dom'; 
import { Link } from "react-router";
import { contactListApp as ContactListApp } from "../modules/ContactListApp";

export class ModulesHome extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h3>Modules list</h3>
                    <ul className="list-unstyled modules-list">
                        <li>
                            <Link to="/modules/contactlist">
                                <i className="fa fa-address-book" aria-hidden="true"></i>
                                Contacts List
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = {
    modulesHome : ModulesHome
}