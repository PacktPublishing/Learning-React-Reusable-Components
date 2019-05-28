import React from "react";
import ReactDOM from "react-dom";
import {default as Portfolio,PortfolioItem} from "./components/portfolio";


var obj = {from:'Ben2'};
//var {from, to} = obj;

var dup = a => a * a ;

//console.log(dup(10));

function hey({from='Ben', to='You'}){
	return `Hello from  ${from} , to ${to}.`;
}

//console.log(hey(obj));


ReactDOM.render(
	<Portfolio>
    <PortfolioItem img="cake" />
    <PortfolioItem img="circus" />
    <PortfolioItem img="game" />
    <PortfolioItem img="safe" />
    <PortfolioItem img="submarine" />
    <PortfolioItem img="cabin" />
	</Portfolio>, document.getElementById('react-app'));






