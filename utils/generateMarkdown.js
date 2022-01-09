// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


const badgeMit = "";
const badgeApache = "";
const badgeGpl = "";
const badgeBsd = "";

function renderLicenseBadge(data, license) {
  console.log("Testing license", license);

        if(data.license.includes("MIT")) {
            badgeMit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
            console.log(badgeMit);
        } 
        if(data.license.includes("Apache 2.0")) {
            badgeApache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
            console.log(badgeApache);
        }
        if(data.license.includes("GPL v3")) {
            badgeGpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
            console.log(badgeGpl);
        }
        if(data.license.includes("BSD 3")) {
            badgeBsd = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
            console.log(badgeBsd);
        }
        else if(data.license.includes("None")) {
            return "";
        }

}

// // TODO: Create a function that returns the license link
// If there is no license, return an empty string

const licenseMit = "";
const licenseApache = "";
const licenseGpl = "";
const licenseBsd = "";

function renderLicenseLink(data, license)  {

    if(data.license.includes("MIT")) {
      licenseMit = "(https://opensource.org/licenses/MIT)";
      console.log(licenseMit);
    } 
    if(data.license.includes("Apache 2.0")) {
      licenseApache = "(https://opensource.org/licenses/Apache-2.0)";
      console.log(licenseApache);
    }
    if(data.license.includes("GPL v3")) {
      licenseGpl = "(https://www.gnu.org/licenses/gpl-3.0)"
      console.log(licenseGpl);
    }
    if(data.license.includes("BSD 3")) {
      licenseBsd = "(https://opensource.org/licenses/BSD-3-Clause)"
      console.log(licenseBsd);
    }
    else if(badge.includes("None")) {
      return "";
    }

}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

const licenses = ""; 
const mit = "";

function renderLicenseSection(license) {

  mit = badgeMit.concat(licenseMit);
  apache = badgeApache.concat(licenseApache);

  if(mit || apache) {
    licenses += "";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  
  
 
  # ${data.title}
  

  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  For questions about this application or if you would like to collaborate, reach out:

  GitHub: <a href="https://github.com/${data.github}">${data.github}</a>
  Email: <a href="mailto:${data.email}">${data.email}</a>

`;
}

module.exports = generateMarkdown;
