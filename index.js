// Packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input

const questions = [
    {
        type: "input",
        message: "Provide the title of your application.",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your application.",
        name: "description",
       
    }, 
    {
        type: "input",
        message: "Provide installation instructions for your application.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide usage information about your application.",
        name: "usage",
    },
    {
        type: "input",
        message: "Provide contribution guidelines.",
        name: "contributing",
    },
    {
        type: "input",
        message: "Provide instructions on how to test your application.",
        name: "tests",
    },
    {
        type: "checkbox",
        message: "Select a license for your application.",
        choices: ["MIT", "Apache", "Apache 2", "GPL", "compliant", "BSD"],
        name: "license",
    },
    {
        type: "input",
        message: "Enter your GitHub username.",
        name: "github",
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "email"
    }
];


// Writes the README.MD file.

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('Success!'))

}

// Initializing application.

function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile("./output/README.md", generateMarkdown(data));

    })
}

init();