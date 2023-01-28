import inquirer from 'inquirer';
import fs from 'fs';
import util from 'util';
import path from 'path';
//const generateMarkdown = require("./utils/generateMarkdown");


// const fs = require("fs");
// const path = require('path');
// const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project title?',
        },

        {
            type: 'input',
            name: 'Description',
            message: 'Describe your project',
        },

        {
            type: 'input',
            name: 'Installation',
            message: 'Describe project installation',
        },

        {
            type: 'input',
            name: 'Usage',
            message: 'Describe how project is used',
        },

        {
            type: 'list',
            name: 'License',
            message: 'What license is project using?',
            choices: ['Apache License 2.0', 'MIT License', 'Eclipse Public license 2.0', 'None'],

        },

        {
            type: 'input',
            name: 'Contribution',
            message: 'Enter contributors',
        },

        {
            type: 'input',
            name: 'Test',
            message: 'Describe tests run',
        },

        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your github user name?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }

    ]);

    const answers = {
        projectTitle: "",
        Description: "",
        Installation: "",
        Usage: "",
        License: "",
        Contribution: "",
        Test: "",
        githubUser: "",
        email: ""

    };

const generateReadMe = (answers) =>

` # ${answers.projectTitle}
 
## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description 
${answers.Description}

# Installation
${answers.Installation}

# Usage
${answers.Usage}

# License
The license being used is: ${answers.License}

# Contributing
${answers.Contribution}

# Tests
${answers.Test}

# Questions
My github username is: ${answers.githubUser}
The link to my github profile is: https://github.com/${answers.githubUser}
You can also contact me via email on: ${answers.email}
`;

// function to write README file
questions()
.then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
