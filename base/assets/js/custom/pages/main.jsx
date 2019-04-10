import React from 'react';
import ReactDOM from 'react-dom';

export class Main extends React.Component {
    render() {
        var bannerStyle = {
            backgroundImage: "url('/assets/images/default/12199.jpg')"
        }
        var featuresStyle = {
            backgroundImage: "url('/assets/images/default/agencies.jpg')"
        }
        return (

            <div className="row">
                <div className="col-xs-12">
                    <section className="banner" style={bannerStyle}>
                        <div className="video-container">
                            {/*
                            <div className="video">
                                <video id="video--office" width="100%" height="100%" autoplay loop>
                                    <source src="/assets/video/office.mp4" type="video/mp4"> 
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            */}
                            <div className="header-cont">
                                <div className="header-cont__inner">
                                    <hgroup>
                                        <h1>Building Brands for the future</h1>
                                        <h2>Felis lacus ultrices dolor, ac consectetur nibh arcu quis nibh. Nam consequat.</h2>
                                    </hgroup>
                                    <div className="button-cont">
                                        <button className="btn btn-default btn-info">
                                            {/*<i className="fa fa-angle-right"></i>*/}
                                            Our Work
                                        </button>
                                        <button className="btn btn-default btn-warning">
                                            {/*<i className="fa fa-angle-right"></i>*/}
                                            Watch Video
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section features">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="intro__snippet">
                                        <div className="intro__snippet__icon">
                                            <i className="fa fa-television" aria-hidden="true"></i>
                                        </div>
                                        <h2>Heading One</h2>
                                        <p> Morbi tincidunt nulla et augue tincidunt sodales. Etiam sapien massa, placerat

                                            </p>
                                        <button className="btn btn-default">Read More</button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-4">
                                    <div className="intro__snippet">
                                        <div className="intro__snippet__icon">
                                            <i className="fa fa-shield" aria-hidden="true"></i>
                                        </div>
                                        <h2>Heading Two</h2>
                                        <p> Morbi tincidunt nulla et augue tincidunt sodales. Etiam sapien massa, placerat

                                            </p>
                                        <button className="btn btn-default">Read More</button>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4">
                                    <div className="intro__snippet">
                                        <div className="intro__snippet__icon">
                                            <i className="fa fa-behance" aria-hidden="true"></i>
                                        </div>
                                        <h2>Heading Three</h2>
                                        <p>Felis lacus ultrices dolor, ac consectetur nibh arcu quis nibh. Nam consequat.

                                            </p>
                                        <button className="btn btn-default">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section services">
                        <div className="container">
                        </div>
                        <div className="container">
                            <div id="todo"></div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

module.exports = {
    main: Main
}
