import React from "react";

export default class Section extends React.Component {
	render(){
		return <section className={this.props.className} id={this.props.id}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>{this.props.title}</h2>
                    <hr className="star-light" />
                </div>
            </div>
            <div className="row">
                {this.props.children}
            </div>
        </div>
    </section>;

	}
}