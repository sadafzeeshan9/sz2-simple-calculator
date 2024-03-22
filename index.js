#! /usr/bin/env node              
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "enter first number",
    },
    { type: "number", name: "secondNumber", message: "enter first number" },
    {
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "select one of the operator to perform operation",
    },
]);
//conditional statment//
if (answer.operator === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("please select");
}
