const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const infoAboutEmployees = [];
const generateHTML = require('./generateHTML');
const Engeneer = require('./lib/Engeneer');


// console.log(Egineer)  
// questionire
const questions = [
  
    {
        type:   'list',
        message:    "What is your job tiltle",
        name: 'role',
        choices: ["Manager", "Engeneer", "Intern"],
        
    },
    { 
        
        type:   'input',
        message:    "What is the name of the employee ?",
        name: 'name'
    },
    {
        type:   'input',
        message:    "What is your employee ID number ?",
        name: 'id'
    },
    {
        type:   'input',
        message:    "What is your email ?",
        name: 'email',
        
    },
    {when: (data) => data.role === "Manager", 
       type:   'input',
       message:    "What is your office number",
       name: 'officeNumber',
       
    },
    {   when: (data) => data.role === "Engeneer",
        type:   'input',
        message:    "What is your GitHub",
        name: 'github',
        
    },
    {    when: (data) => data.role === "Intern",
        type:   'input',
        message:    "What University did/do you attend?",
        name: 'school',
       
    },
    
]; 


// TODO: Create a function to write  file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => err? console.log(err) : console.log("Your HTML was successfuly created!")
    )}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(data => {
       if(data.role == "Intern"){
           const newEmployee =  new Intern(data.name, data.id, data.email, data.school)
           infoAboutEmployees.push(newEmployee)
        }
       if(data.role == "Engeneer"){
           const newEmployee =  new Engeneer(data.name, data.id, data.email, data.github)
           infoAboutEmployees.push(newEmployee)
        }
       if(data.role == "Manager"){
           const newEmployee =  new Manager(data.name, data.id, data.email, data.officeNumber)
           infoAboutEmployees.push(newEmployee)
        }
        inquirer.prompt({
            
                
                type:   'list',
                message:    "Do you have another entry to do ?",
                name: 'yesNoAdd',
                choices: ["Yes","NO"]
            
           
        }).then(addMore => {
            if(addMore.yesNoAdd == "Yes"){
                 init();
            }
            else{
                writeToFile("index1.html", indexHtml ) 
            }
        })
        
  

   
        const indexHtml = generateHTML.genrateTeamHtml(infoAboutEmployees);
   });
   

 }; 
init();
