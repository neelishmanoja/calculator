#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstnumber"},
    {message: "Enter second number", type: "number", name: "secondnumber"},
    {message: "Select oone of the operator to perform operation", type: "list",name: "operator",
choices:["Addition", "subtraction", "multiplication", "division"]},
])
 if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
 } else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
 } else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
 } else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
 } else {
   console.log("Enter valid number");
 }