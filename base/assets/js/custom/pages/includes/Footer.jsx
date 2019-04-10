import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="logo-cont">
                                    <img src="/assets/images/default/logo.png" alt="" />
                                </div>

                                <p>Etiam et porttitor purus. Vestibulum sed leo porta, consectetur nulla ut, tincidunt arcu. Vivamus
                                felis massa, tempor non vehicula hendrerit</p>

                                <p>Etiam et porttitor purus. Vestibulum sed leo porta, consectetur nulla ut, tincidunt arcu. Vivamus
                                felis massa, tempor non vehicula hendrerit</p>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <h5>Find us</h5>
                                <nav>
                                    <ul className="social-links">
                                        <li className="social-links__item">
                                            <a href="#" target="_blank" title="Google">
                                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="#" target="_blank" title="Facebook">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="#" target="_blank" title="Twitter">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="social-links__item">
                                            <a href="#" target="_blank" title="Linked In">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <h6>Address.</h6>
                                <p>Etiam et porttitor purus.<br />344 Lindel way, Stockholm, SO22 4AQ</p> 
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-5">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <nav>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" title="Brand Development &amp; Communication">Brand Development &amp; Communication</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Web Design">Web Design</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Sofware Development">Sofware Development</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Analytics">Analytics</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Search Engine Optimisation">Search Engine Optimisation</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <nav>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#" title="Incentive">Incentive</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Work">Work</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Services">Services</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Blog">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Tetimonials">Tetimonials</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="About Us">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Contact Us">Contact Us</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <p>&copy; Copyright 2016</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            
        )
    }
}

module.exports = {
    footer: Footer
}