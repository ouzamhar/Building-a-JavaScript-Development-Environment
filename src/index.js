import "./index.css";
const numeral = require("numeral");

const courseValue = numeral(1000).format("$0,0.00");
console.log(`I woud pay ${courseValue} for this awesome course!`);
