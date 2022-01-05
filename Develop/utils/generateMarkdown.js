// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!data.license) {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` Project Title: ${data.title}
  https://img.shields.io/static/v1?label=${data.license}&color=blue
  
  Table of Contents:
  -[Description](#Description)
  -Installation
  -Usage
  -License
  -Contributing
  -Tests
  -Questions

  #Description: ${data.description}

  Installation: ${data.installation}

  Usage Informtaion: ${data.usage}

  Contribution guidelines: ${data.contributionAdd}

  Testing Information: ${data.testConfirmAdd}

  Questions:
  Github username: ${data.github}
  email: https://www.${data.email}

`;
}

module.exports = generateMarkdown;
