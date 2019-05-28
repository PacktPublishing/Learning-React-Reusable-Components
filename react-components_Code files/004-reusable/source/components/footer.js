import React from "react";

class Element extends React.Component{
   render(){
        return <div className="footer-col col-md-4">
                        <h3>{this.props.title}</h3>
                        {this.props.children}
                    </div>;
    }

}
class TextFooter extends React.Component {
    static get defaultProps(){
        return {
            title: "Ben you forgot a title",
            content:"Ben you still rock!"
        };
    }

    static get propTypes(){
        return {
            title: React.PropTypes.oneOfType([
                    React.PropTypes.string,
                    React.PropTypes.number]),
            content: React.PropTypes.node,
            //children: React.PropTypes.element.isRequired
        };
    }

     render(){
        return <Element title={this.props.title}>
            <p>{this.props.content}</p>
        </Element>;
    }
}
TextFooter.version = '1.0.0';

console.log("our text version is:",TextFooter.version);
class SocialLink extends  React.Component {
     render(){
        let className = "fa fa-fw fa-" + this.props.name;
        return <li><a href={this.props.link} className="btn-social btn-outline"><i className={className} ></i></a></li>;

     }
}

class ComplexFooter extends React.Component {
     render(){
        let children = [];
        for(let sl of this.props.content){
            children.push( <SocialLink key={sl.name} {...sl} />);
        }


        return <Element title={this.props.title}>
                <ul className="list-inline">{children}</ul>
                </Element>;
    }
}

export default class Footer extends React.Component {
    render(){

        return <footer className="text-center">
        <div className="footer-above">
            <div className="container">
                <div className="row">
                    <TextFooter {...this.props.data[0]} />
                    <ComplexFooter {...this.props.data[1]} />
                    <TextFooter {...this.props.data[2]} />
                    
                    
                </div>
            </div>
        </div>
        <div className="footer-below">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        Copyright &copy; Your Website 2014
                    </div>
                </div>
            </div>
        </div>
    </footer>;

    }
}

