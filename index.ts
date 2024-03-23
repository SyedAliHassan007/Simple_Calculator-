#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  {
    message: ((chalk.white.bold.italic)("Enter first number")),
    type: "number",
    name: "firstNumber",
  },
  {
    message: ((chalk.white.bold.italic)("Enter Second number")),
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: [ "Addition",
               "Subtraction",
               "Multiplication",
               "Division",
               "Modulus",
               "Exponention",
              ],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === "Exponention") {
  console.log(answer.firstNumber ** answer.secondNumber);

} else {
  console.log("Please Select Valid Operator.");
}