// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown.js"); //pulls data from generateMarkdown.js file

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your projects title?",
        name: "title",
        validate: (titleValid) => {
          if (titleValid) {
            return true;
          } else {
            console.log("Project title required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
        validate: (githubValid) => {
          if (githubValid) {
            return true;
          } else {
            console.log("github username required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: (emailValid) => {
          if (emailValid) {
            return true;
          } else {
            console.log("email address required");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "licenses",
        message:
          "Choose from list of licenses to apply? (Check all that apply)",
        choices: [
          "Academic Free License v3.0",
          "Apache license 2.0",
          "Artistic license 2.0",
          "Boost Software license 1.0",
          "BSD 2-clause",
        ],
      },
      {
        type: "input",
        message: "Add description",
        name: "description",
        validate: (descValid) => {
          if (descValid) {
            return true;
          } else {
            console.log("description required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Add installation instructions",
        name: "installation",
        validate: (installValid) => {
          if (installValid) {
            return true;
          } else {
            console.log("Project install required");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "Add usage information",
        name: "usage",
        validate: (usageValid) => {
          if (usageValid) {
            return true;
          } else {
            console.log("Project usage information required");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "contribution",
        message:
          "Would you like to add some contribution guidelines to your project?",
        default: true,
      },
      {
        type: "input",
        name: "contributionAdd",
        message: "Provide contribution guidelines:",
        when: ({ contribution }) => contribution,
      },
      {
        type: "confirm",
        name: "testConfirm",
        message: "Add test instructions to your READme?",
        default: true,
      },
      {
        type: "input",
        name: "testConfirmAdd",
        message: "Add test instructions:",
        when: ({ testConfirm }) => testConfirm,
      },
    ])
    .then((answers) => {
      const newData = generateMarkdown(answers);

      fs.writeFileSync("./README.md", newData);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();
