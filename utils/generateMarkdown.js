// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
  const badge = "";

  if(data.license === MIT) {
    badge = `<p>something</p>`;
  
  } else {
    return "";
  }

}
// renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ${data.license}
  Testing ${badge}
  
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
