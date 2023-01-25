const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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

    ]

    )

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
