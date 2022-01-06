// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.licenses) {
    return " ";
  }
  return `https://img.shields.io/github/license/${data.github}/${data.title}.svg?`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (!data.licenses) {
    return " ";
  }
  return `https://github.com/${data.github}/${data.title}/blob/main/LICENSE.txt`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (!data.licenses) {
    return " ";
  }
  return `${data.licenses} [![License Badge](${renderLicenseBadge(
    data
  )})](${renderLicenseLink(data)})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` Project Title: ${data.title}

  Badge: ${renderLicenseSection(data)}
  
  Table of Contents:
      [Description](#Description)
      [Installation](#Installation)
      [Usage](#Usage)
      [License](#License)
      [Contributing](#Contributing)
      [Tests](#Tests)
      [Questions](#Questions)

  #Description: ${data.description}

  #Installation: ${data.installation}

  #Usage Informtaion: ${data.usage}

  #Contribution guidelines: ${data.contributionAdd}

  #Testing Information: ${data.testConfirmAdd}

  #Questions:
  Github username: ${data.github}
  
  email: https://www.${data.email}

`;
}

module.exports = generateMarkdown;
