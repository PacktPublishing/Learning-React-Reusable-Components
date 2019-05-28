import React from "react";

export class PortfolioItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {hasImage:true};
        this.onUpdateImageState = this.onUpdateImageState.bind(this);

    }
    onUpdateImageState(e){
        this.setState({hasImage:false});
        setTimeout(()=>{
            this.setState({hasImage:true});
        },1000)
    }

    render(){

		var path = `img/portfolio/${this.props.img}.png`;
		//console.log(path);
		return <div onClick={this.onUpdateImageState} className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        {this.state.hasImage ? <img src={path} className="img-responsive" alt="" />:null}
                        
                    </a>
                </div>;
	}
}
export default class Portfolio extends React.Component {
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
                {this.props.children}
            </div>
        </div>
    </section>;
	}

}