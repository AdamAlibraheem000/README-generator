// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
  ]);
};

//   .then((answers) => {
//     fs.writeFileSync(
//       answers.fullname + ".md",
//       JSON.stringify(answers, null, "\t")
//     );
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  questions();
}

// Function call to initialize app
init();
