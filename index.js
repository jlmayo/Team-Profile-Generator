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

const newEngineer = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the new engineer',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter the Employee ID of the new engineer',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter the email address of the new engineer',
    },
    {
        name: 'gitHub',
        type: 'input',
        message: 'Enter the GitHub username of the new engineer',
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

const newIntern = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the new intern',
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter the Employee ID of the new intern',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter the email address of the new intern',
    },
    {
        name: 'school',
        type: 'input',
        message: 'Enter the current school for the new intern',
    },
    {
        name: 'continue',
        type: 'list',
        choices: [
            'Add Engineer',
            'Add Intern',
            'Exit'
        ],
        message: 'Do you want to continue?',
    },
];