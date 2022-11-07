//Gloval variables//

const Manager = require("./TJ/Manager");
const Engineer = require("./TJ/Engineer");
const Intern = require("./TJ/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "Structure");
const outputPath = path.join(OUTPUT_DIR, "Team.html");