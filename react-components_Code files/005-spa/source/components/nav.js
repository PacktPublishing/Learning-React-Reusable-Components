import React from "react";

class NavItem extends React.Component {
    static get defaultProps(){
        return {
            className:"page-scroll"
        };
    }

    render(){
        return <li {...this.props}>
                        <a onClick={this.props.onClick} href={this.props.link}>{this.props.name}</a>
                    </li>;

    }
}

export default class Nav extends React.Component {
    
    render(){
        let firstData = this.props.data[0],
            a = this.props.data.slice(1);

        a.forEach((e,i,a) =>{
            a[i] = <NavItem onClick={this.props.onClick} key={i} {...e} />;
        });
        

        return <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href={firstData.link}>{firstData.name}</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <NavItem className="hidden" link={firstData.link} />
                    {a}
                </ul>
            </div>
        </div>
    </nav>;
    }

}
