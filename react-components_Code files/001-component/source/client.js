import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./components/portfolio";

function hey(from='Ben', to='You'){
	return `Hello from  ${from} , to ${to}.`;
}


ReactDOM.render(<Portfolio />, document.getElementById('page-top'));