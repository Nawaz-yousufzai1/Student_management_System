#! /usr/bin/env node
import inquirer from "inquirer"








// other way
const randomNumber: number= Math.floor(10000+Math.random()*90000)
let myBalance:number=0
let answer =await inquirer.prompt(
    [
        {
            name:"students",
            type:"input",
            message:"Enter student name:",
            validate: function (value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter a non empty value"
            },

        },
        {
            name:"courses",
            type:"list",
            message:"Select the course to enrolled",
            choices:["MS.Office","HTML","Javascript","Typescript","Python"]
        }
    ]
);

const tutionFee:{[key:string]:number}={
    "Ms.Office":2000,
    "HTML":2500,
    "Javascript":5000,
    "Typescript":6000,
    "Python":10000
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}`);
console.log(`Balance: ${myBalance}\n`);

let paymentType= await inquirer.prompt([
    {
        name:"payment",
        type:"list",
        message:"Select payment method",
        choices:["Bank Transfer", "Easypaisa","Jazzcash"]
    },
    {
        name:"amount",
        type:"input",
        message:"Transfer Money:",
        validate: function (value){
            if (value.trim() !== ""){
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method${paymentType.payment}\n`);

const tutionFees=tutionFee[answer.courses];
const paymentAmount=parseFloat(paymentType.amount)

if(tutionFees===paymentAmount){
    console.log(`congratulations, you have successfully enrolled in ${answer.courses}.\n`);
let ans = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"what would you like",
        choices:["View Status","Exit"]
    }
])
if (ans.select==="View Status"){
    console.log("\n*********status*******\n");
    console.log(`Student Name: ${answer.students}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Course: ${answer.courses}`);
    console.log(`Tution Fees Paid: ${paymentAmount}`);
    console.log(`Balance:${myBalance+=paymentAmount}`);
}else{
    console.log("\nExiting student management system");
}
}else{
    console.log("Invalid amount to course\n");
}
