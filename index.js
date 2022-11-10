//Gloval variables//

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "Structure");
const outputPath = path.join(OUTPUT_DIR, "Team.html");
const generateTeam = require("./src/template.js")

// Code to use inquirer to gather information about the development team members,
//and to create objects for each team member.//

teamArray = [];

function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  } 
  //Array of questions for Manager//
  function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      createTeam();
    });
  
  }
 //Array of questions for Engineer//
  function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

}
