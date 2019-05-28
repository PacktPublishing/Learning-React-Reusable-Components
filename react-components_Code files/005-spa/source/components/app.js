import React from "react";
import {default as Portfolio,version} from "./portfolio";
import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Footer from "./footer";
import Nav from "./nav";


export default class App extends React.Component {
		constructor(props){
        super(props);

        this.state = {section:location.hash}

        this.map = new Map();
        this.map.set('footer',Footer);


        this.onLinkClick = this.onLinkClick.bind(this);

        window.onhashchange = (e) =>{
        	if(this.map.has(location.hash)){
        		this.setState({section:location.hash});
        	}
        };


    }

    onLinkClick(e){
    	//e.preventDefault();
      //console.log("hello");
    }


    render(){
    	let children = [],
    			navModel = [];
    	for(let key in this.props.data){
    		let View = this.props.data[key].view,
    				{label, model} = this.props.data[key]

    		if(!View && this.map.has(key)){
    			View = this.map.get(key);
    		}

    		if(View){
    			//children.push(<View key={key} data={model} />);
    			if(label){
    				this.map.set("#"+key, View);
    				this.map.set(View, model);
    				navModel.push({link:"#"+key , name:label});
    			}
    		}
    	}

    	if(this.map.has(this.state.section)){
    		const Tag = this.map.get(this.state.section);
    		children = [<Tag key={this.state.section} data={this.map.get(Tag)}/>];
    	}


    	return <div>
    					<Nav onClick={this.onLinkClick} data={navModel} />
							{children}
							
						</div>;

			/*

							<Header title="Master React Components" subt="React - Components - JSX - ES6" />
							<Portfolio data={this.props.data.portfolio}  />
							<About />
							<Contact />
							<Footer data={this.props.data.footer.model} />


			*/

    }

 }