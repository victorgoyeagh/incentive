import React from 'react';
import ReactDOM from 'react-dom'; 
import { contactListApp as ContactListApp } from "../modules/ContactListApp";

export class Modules extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h2>Modules</h2>
                            <hr />
                            {this.props.children}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports = {
    modules: Modules
}
