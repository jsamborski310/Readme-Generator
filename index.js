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
        choices: ["MIT", "Apache 2.0", "GPL v3", "BSD 3", "None"],
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

////////////Include error catch.

function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile("./output/README.md", generateMarkdown(data));
        console.log(data.license);

/////////////////////////////////////////////

        // BADGE
        
        // const badge = data.license;
        
        // if(badge.includes("MIT")) {
        //     const badgeMit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        //     console.log(badgeMit);
        // } 
        // if(badge.includes("Apache 2.0")) {
        //     const badgeApache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
        //     console.log(badgeApache);
        // }
        // if(badge.includes("GPL v3")) {
        //     const badgeGpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
        //     console.log(badgeGpl);
        // }
        // if(badge.includes("BSD 3")) {
        //     const badgeBsd = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
        //     console.log(badgeBsd);
        // }
        // else if(badge.includes("None")) {
        //     console.log("");
        // }

        // LINK
        
        // if(badgeMit) {
        //     const licenseMit = "(https://opensource.org/licenses/MIT)";
        //     console.log(licenseMit);
        // } 
        // if(badgeApache) {
        //     const licenseApache = "(https://opensource.org/licenses/Apache-2.0)";
        //     console.log(licenseApache);
        // }
        // if(badgeGpl) {
        //     const licenseGpl = "(https://www.gnu.org/licenses/gpl-3.0)"
        //     console.log(licenseGpl);
        // }
        // if(badgeBsd) {
        //     const licenseBsd = "(https://opensource.org/licenses/BSD-3-Clause)"
        //     console.log(licenseBsd);
        // }
        // else if(badge.includes("None")) {
        //     console.log("");
        // }


/////////////////////////////////////////////

    })
}

init();





