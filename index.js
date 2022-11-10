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