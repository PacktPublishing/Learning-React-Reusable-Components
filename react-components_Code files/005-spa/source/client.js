import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import {default as Portfolio,version} from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";


let portfolioModel = 
  [{img:'cake', link:'http://02geek.com'},
   {img:'circus', link:'http://02skills.com'},
   {img:'game', link:'http://packtpub.com'},
   {img:'safe', link:'http://02geek.com'},
   {img:'submarine', link:'http://02geek.com'},
   {img:"cabin", link:'http://anxpl.com'}
  ];

let headerModel = {
  title:"Master React Components",
  subt:"React - Components - JSX - ES6"
};


let footerModel= [
    {title: "Location"},
    {title: "Around the Web" , content:[
                {link:"#", name:"facebook"},
                {link:"#", name:"google-plus"},
                {link:"#", name:"twitter"},
                {link:"#", name:"linkedin"},
                {link:"#", name:"dribbble"},


                ]},
    {title: "About Freelancer" , content:"Freelance is a free to use, open source Bootstrap theme created by Start Bootstrap."}
];

let mv={
  header:{view:Header, model:headerModel , label:"React Components"},
  portfolio:{model:portfolioModel, view:Portfolio , label:"Portfolio"},
  about:{view:About, label:"About"},
  contact:{view:Contact, label:"Contact"},
  footer:{model:footerModel}
};




ReactDOM.render(
	<App data={mv} />
	, document.getElementById('page-top'));







