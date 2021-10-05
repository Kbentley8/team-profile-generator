const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site')

let manager = [];
let enginner = [];
let intern = [];
let emplyoeeArr = {manager, engineer, intern};

