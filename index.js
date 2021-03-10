//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path =require('path')
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for the user
const questions = [

    { 
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {    
        type: "input",
        name: "Github",
        message: "What is your Github username",

    },
    {
        type: "input",
        name: "description",
        message: "Describe your project",
    },
    {   
        type: "input",
        name: "installation",
        message: "What was the installation process of your project?",
    },
    {     
        type: "input",
        name: "usage",
        message: "What is your project used for?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use for your application?",
        choices: ["MIT","Mozilla Public License 2.0","Apache License 2.0","None",]
    },
    {
        type: "input",
        name: "contributing",
        message: "Would you like other users to contribute? Where there contributors for this app?",
    },
    {
        type: "input",
        name: "tests",
        message: "What testing information can you please provide?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail?",
    },
        ]


// function to write README file
function writeToFile(fileName, data) {}

// function to initialize app
function init() {
    
    inquirer.prompt(questions)
        .then(function(answers){
       
            fs.writeFile(path.join(process.cwd(),'ReadMeExample.md'), generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log('Success!')
           );
           


        })

}



// Function call to initialize app
init();
