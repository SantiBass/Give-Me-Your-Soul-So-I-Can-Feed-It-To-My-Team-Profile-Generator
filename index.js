const inquirer = require('inquirer');
const fs = require('fs');
const Employees = ('./lib/Employees.js');
const Manager = ('./lib/Manager.js');
const Intern = ('./lib/Intern');
const Egineer = ('./lib/Engeneer');
const infoAboutEmployees = [];
const generateHTML = ('./generateHTML.js')

// console.log(Egineer)  
// questionire
const quiestions = [
  
    { 
   // name input for team members 
        type:   'input',
        message:    "Waht is the name of the employee ?",
        name: 'name'
    },
    {
        type:   'input',
        message:    "What is your employee ID number ?",
        name: 'ID'
    },
    {
        type:   'list',
        message:    "What is your job tille",
        name: 'jobTitle',
        choices: ["Manager", "Engeneer", "Intern"],
    },
    {
        type:   'input',
        message:    "What is your email ?",
        name: 'email',
        
    },
    {   
        type:   'input',
        message:    "What is your GitHub",
        name: 'github',
    },
    {
        type:   'input',
        message:    "",
        name: ''
        
    },
    {
        type:   '',
        message:    "",
        name: ''
    },



]; console.log(quiestions)
