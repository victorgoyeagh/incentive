import React from 'react';
import ReactDOM from 'react-dom';

export class Forms extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h2>Forms Details</h2>
                            <hr />
                            <p>Forms text.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports = {
    forms: Forms
}
