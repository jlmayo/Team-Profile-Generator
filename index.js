const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const addNewManager = require('./src/new-manager');
const addNewEngineer = require('./src/new-engineer');
const addNewIntern = require('./src/new-intern');
const employeeCardsWrap = require('./src/employee-cards');
const { profile } = require("console");


const officeTeam = [];

const newManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Team Profile Generator. Do you want to add a new Manager?',
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

ask(newManager);

function ask(questionArr) {
    inquirer
        .prompt(questionArr)
        .then((teammate) => {
            officeTeam.push(teammate);

            if (teammate.continue === 'Add Engineer') {
                ask(newEngineer);
            } else if (teammate.continue === 'Add Intern') {
                ask(newIntern);
            } else {
                createProfile(officeTeam);
            }
        })
        .catch((err) => console.log(err));
}

function createProfile(officeTeam) {

    const profiles = officeTeam.map((teammate) => {
        const { name, id, email } = teammate;

        if (teammate.hasOwnProperty('officeNumber')) {
            const { officeNumber } = teammate;
            return new Manager(name, id, email, officeNumber);
        }

        if(teammate.hasOwnProperty('github')) {
            const { github } = teammate;
            return new Engineer(name, id, email, github);
        }

        if(teammate.hasOwnProperty('school')) {
            const { school } = teammate;
            return new Intern(name, id, email, school);
        }
    });

    createHTML(profiles);
}

function createHTML(profiles) {
    let employeeCards = '';
    profiles.forEach((profile) => {
        if (profile instanceof Manager) {
            const card = addNewManager(profile);
            employeeCards += card;
        } else if (profile instanceof Engineer) {
            const card = addNewEngineer(profile);
            employeeCards += card;
        } else if (profile instanceof Intern) {
            const card = addNewIntern(profile);
            employeeCards += card;
        }
    })

const newHtml = employeeCardsWrap(employeeCards);

writeHtml(newHtml);
};

function writeHtml(newHtml) {
    fs.writeFile('./dist/index.html', newHtml, (err) => {
        if (err) throw err;
        console.log('New Team Profile created successfully');
    });
};