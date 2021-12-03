const inquirer = require('inquirer');
const fs = require('fs');
// const Employees = ('./lib/Employees.js');
// const Manager = ('./lib/Manager.js');
// const Intern = ('./lib/Intern');
// const Egineer = ('./lib/Engeneer');
// const infoAboutEmployees = [];
// const generateHTML = ('./generateHTML.js')

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
        message:    "question here",
        name: 'question1',
      
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
        message:    "what is your manager office number ?",
        name: 'question2'
        
    },
    {
        type:   'input',
        message:    "question",
        name: 'question3',
      
    },
    {
        type:   'list',
        message:    "Do you have another entry to do ?",
        name: 'yesNoAdd',
        choices: ["Yes","NO"]
        
    },



]; 
inquirer.prompt(quiestions)


// function init(){
//     inquirer.prompt(quiestions)
//     .then((data) => {
//          addingInfo(data);
//          if (data.yesNoAdd === "Yes"){
//              init();
//          }else{
//              fs.writeFile()
//          }
  
//     })
// }
// function addingInfo(){}
// init();