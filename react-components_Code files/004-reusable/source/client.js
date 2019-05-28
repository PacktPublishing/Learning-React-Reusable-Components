import React from "react";
import ReactDOM from "react-dom";
import {default as Portfolio,version} from "./components/portfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";

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

//console.log(dup(10));

function hey({from='Ben', to='You'}){
	return `Hello from  ${from} , to ${to}.`;
}

//console.log(hey(obj));

//version = "2.1";

console.log(hey`(( \hey\ ))`);


function addNumbers(...args){
	let total = 0;
	for(let arg of args){
		total+=arg;
	}
	return total;
}

function dupFirstbyTotalOfRest(a, ...args){
	return a * addNumbers.apply(this,args);

}

console.log(">>>>>", dupFirstbyTotalOfRest(10,10,3,2,30,10,2));




ReactDOM.render(
	<Footer data={footerModel} />
	, document.getElementById('page-top'));

/*
<div>
		<Header title="Master React Components" subt="React - Components - JSX - ES6" />
		<Portfolio data={portfolioModel}  />
		<About />
		<Contact />
	</div>

*/






