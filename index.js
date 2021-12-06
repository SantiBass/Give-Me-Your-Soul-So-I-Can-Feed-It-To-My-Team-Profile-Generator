const inquirer = require('inquirer');
const fs = require('fs');
// const Employees = ('./lib/Employees.js');
// const Manager = ('./lib/Manager.js');
// const Intern = ('./lib/Intern');
// const Egineer = ('./lib/Engeneer');
// const infoAboutEmployees = [];
 const generateHTML = require('./generateHTML')

// console.log(Egineer)  
// questionire
const questions = [
  
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
        type:   'input',
        message:    "What is your email ?",
        name: 'email',
        
    },
    {
        type:   'list',
        message:    "What is your job tille",
        name: 'jobTitle',
        choices: ["Manager", "Engeneer", "Intern"],
        
    },
    
   
]; 
inquirer.prompt(questions).then = (answers) => {
if (answers.jobTitle == 'Manager'){
    inquirer.prompt([
        {
            type:   'input',
            message:    "What is your office number",
            name: 'officeNumber',
          
        },
        {
            
        type:   'list',
        message:    "Do you have another entry to do ?",
        name: 'yesNoAdd',
        choices: ["Yes","NO"]
    }
])
}
if (answers.jobTitle == 'Engeneer'){
inquirer.prompt([
    
    {   
        type:   'input',
        message:    "What is your GitHub",
        name: 'gitHub',
    },
    {
        type:   'list',
        message:    "Do you have another entry to do ?",
        name: 'yesNoAdd',
        choices: ["Yes","NO"]
    }
    
])
}
if (answers.jobTitle == 'Intern'){
    inquirer.prompt([
    
        {   
            type:   'input',
            message:    "What University did/do you attend?",
            name: 'school',
        },
        {
            type:   'list',
            message:    "Do you have another entry to do ?",
            name: 'yesNoAdd',
            choices: ["Yes","NO"]
        }
        
    ])
}
}
// TODO: Create a function to write  file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err? console.log(err) : console.log("Your HTML was successfuly created!")
    )}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(data => {
   const indexHtml = generateHTML.genrateTeamHtml(data);
   writeToFile("index1.html", indexHtml ) 

   
   });
   

};
init();
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