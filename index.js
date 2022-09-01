// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
inquirer.prompt([

        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What installation instructions should your users follow?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Does your repository have any guidelines for contributors?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Does your repository include test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub user name?',
            name: 'user',
        },
        {
            type: 'input',
            message: 'What is the link to your Github repository?',
            name: 'repository',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'What is the best way to contact you?',
            name: 'contact',
            choices: [
                "Phone",
                "SMS message",
                "Email",
                "Slack",
                "Discord",
            ]
        },
        {
            type: 'list',
            message: 'What license, if any, did you use for this project?',
            name: 'license',
            choices: [
                "Apache",
                "ISC",
                "MIT",
                "Mozilla",
                "None"
            ]
        }
    ])

// TODO: Create a function to write README file
.then((data) => {
    const writeToFile = generateMarkdown(data)
    fs.writeFile('Demo-README.md', writeToFile, (err) => 
    err ? console.log(err) : console.log("Successfully created README!"))
})

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();