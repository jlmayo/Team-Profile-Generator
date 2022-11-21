const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const officeTeam = [];

const newManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Team Profile Generator. Click to proceed',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the manager:',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter your Employee ID',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address',
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Enter your office number',
    },
    {
        name: 'continue',
        type: 'list',
        choices: [
            'Add Engineer',
            'Add Intern',
            'Exit'
        ],
        message: 'Do you want to continue?'
    },
];
