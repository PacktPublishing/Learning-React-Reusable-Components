import React from "react";


export default class Header extends React.Component {
    render(){
        console.log(this.props.title.startsWith("Master"));
        // endsWith, inclundes 
        let name = "Ben ** ";
        console.log(name.repeat(10));

        return <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img className="img-responsive" src="img/profile.png" alt="" />
                    <div className="intro-text">
                        <span className="name">{this.props.title}</span>
                        <hr className="star-light" />
                        <span className="skills">{this.props.subt}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>;
    }

}

