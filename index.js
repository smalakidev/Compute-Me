// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    { 
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {    
        type: "input",
        name: "Github Username",
        message: "What is your Github username"

    },
    {
        type: "input",
        name: "description"
        message: "Describe your project"
    },
    {   
        type: "input",
        name: "installation",
        message: "What was the installation process of your project?"
    },
    {     
        type: "input"


    },




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
