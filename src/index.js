import "./index.css";

const numeral = require("numeral");

const courseValue = numeral(1000).format("$0,0.00");
// setting a breakpoint
// debugger;

console.log(`I woud pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
