#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.green.bold("WELCOME TO MY CURRENCY CONVERTER"))


const currency:any ={
    USD:1, // base currency
    EURO:0.91,
    YEN:151.61,
    INR:74.57,
    IRANION_RIYAL:42062,
    SAUDI_RIYAL:3.75,
    PKR:280
};

let userAns = await inquirer.prompt(
    [
    {
    name: "from",
    message: chalk.yellowBright.bold("ENTER FROM CURRENCY: "),
    type: "list",
    choices: ["USD", "EURO", "YEN", "INR", "IRANION_RIYAL", "SAUDI_RIYAL", "PKR"]
    },
    {
    name: "to",
    message: chalk.yellowBright.bold("ENTER TO CURRENCY: "),
    type: "list",
    choices: ["USD", "EURO", "YEN", "INR", "IRANION_RIYAL", "SAUDI_RIYAL", "PKR"]
    },
    {
    name: "amount",
    message: chalk.yellowBright.bold("ENTER YOUR AMOUNT:"),
    type: "number",
    }
    ]
);

let fromAmount = currency[userAns.from]   // exchange rate
let toAmount = currency[userAns.to]       // exchange rate
let amount = userAns.amount
let baseAmount = amount / fromAmount  // base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(chalk.bgMagentaBright.bold(`YOUR CONVERTED AMOUNT IS:${convertedAmount}`));
