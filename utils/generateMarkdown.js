// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function generateMarkdown(data) {

function renderLicenseBadge(license) {
  const badges = {
    gnugplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg](https://www.gnu.org/licenses/lgpl-3.0)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg](https://opensource.org/license/ISC)',
    mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg](https://opensource.org/license/MIT)'
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    isc:'[ISC](https://choosealicense.com/license/isc/)',
    mit:'[MIT](https://choosealicense.com/license/mit/)',
    GNUGPLv3:'[GNUGPLv3](https://choosealicense.com/license/gpl-3.0/)'
}
  return licenseLinks[license]
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under the ${this.renderLicenseLink(license)} license`
  }else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Content 
  - [Project description](#Description)
  - [Installation](#installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  

  ## Contribution
  ${data.contribution}

 

  ## Questions 
  ${data.questions}
  ${data.github}
`;
}

module.exports = generateMarkdown;