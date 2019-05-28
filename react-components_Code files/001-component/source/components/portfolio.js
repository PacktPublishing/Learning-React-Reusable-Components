import React from "react";

export default class Protfolio extends React.Component {
	render(){
		return <section id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Portfolio</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/cabin.png" className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/cake.png" className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/circus.png" className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/game.png" className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/safe.png" className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/submarine.png" className="img-responsive" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>;
	}

}