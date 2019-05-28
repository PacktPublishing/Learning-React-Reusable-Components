import React from "react";
import ReactDOM from "react-dom";
import {default as Portfolio,version} from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";

var obj = {from:'Ben2'};
//var {from, to} = obj;

var dup = a => a * a ;
var portfolioModel = 
  [{img:'cake', link:'http://02geek.com'},
   {img:'circus', link:'http://02skills.com'},
   {img:'game', link:'http://packtpub.com'},
   {img:'safe', link:'http://02geek.com'},
   {img:'submarine', link:'http://02geek.com'},
   {img:"cabin", link:'http://anxpl.com'}
  ];

//console.log(dup(10));

function hey({from='Ben', to='You'}){
	return `Hello from  ${from} , to ${to}.`;
}

//console.log(hey(obj));

//version = "2.1";

console.log(hey`(( \hey\ ))`);

ReactDOM.render(
	<div>
		<Header title="Master React Components" subt="React - Components - JSX - ES6" />
		<Portfolio data={portfolioModel}  />
		<About />
		<Contact />
	</div>
	, document.getElementById('page-top'));






