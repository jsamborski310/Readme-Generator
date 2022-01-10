// Returns a license badge based on which license the User selects. If there is no license, it returns an empty string.

let badgeMit = "";
let badgeApache = "";
let badgeGpl = "";
let badgeBsd = "";

function renderLicenseBadge(data, license) {
  
        if(data.license.includes("MIT")) {
            badgeMit = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        } 
        if(data.license.includes("Apache 2.0")) {
            badgeApache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
        }
        if(data.license.includes("GPL v3")) {
            badgeGpl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
        }
        if(data.license.includes("BSD 3")) {
            badgeBsd = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
        }
        else if(data.license.includes("None")) {
            return "";
        }

}

// Returns the license link. If there is no license, it returns an empty string.

let licenseMit = "";
let licenseApache = "";
let licenseGpl = "";
let licenseBsd = "";

function renderLicenseLink(data, license)  {

    if(data.license.includes("MIT")) {
      licenseMit = "(https://opensource.org/licenses/MIT)";
    } 
    if(data.license.includes("Apache 2.0")) {
      licenseApache = "(https://opensource.org/licenses/Apache-2.0)";
    }
    if(data.license.includes("GPL v3")) {
      licenseGpl = "(https://www.gnu.org/licenses/gpl-3.0)"
    }
    if(data.license.includes("BSD 3")) {
      licenseBsd = "(https://opensource.org/licenses/BSD-3-Clause)"
    }
    else if(data.license.includes("None")) {
      return "";
    }

}
// // Returns the license section of README. If there is no license, it returns an empty string.

function renderLicenseSection(data, license) {

  renderLicenseBadge(data);
  renderLicenseLink(data);

  return `

  ${badgeMit}${licenseMit}
  ${badgeApache}${licenseApache}
  ${badgeGpl}${licenseGpl}
  ${badgeBsd}${licenseBsd}

`
}

// Generates markdown for README.

function generateMarkdown(data) {
  
  return `
  
  ${renderLicenseSection(data)}
  
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

  ## License
  This application is covered under the following license(s):
  ${data.license}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  For questions about this application or if you would like to collaborate, reach out:

  GitHub: <a href="https://github.com/${data.github}">GitHub</a> and/or <a href="mailto:${data.email}">Email</a>

`;
}

module.exports = generateMarkdown;
