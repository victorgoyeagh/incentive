import React from 'react';
import ReactDOM from 'react-dom';

export class General extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h2>General</h2>
                            <hr />
                            <p>General content.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports = {
    general: General
}
