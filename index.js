// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: "Enter a title for the Project",
        validate: titleInput => {
            if(titleInput){
                return true;
            } else {
                alert("Please Enter a title for the Project.");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: " Please enter a description for the Project.",
    },

    {
        type: 'input',
        name: 'Github id',
        message: "Please Enter your GitHub ID : ",
        validate: githubIdInput => {
            if(githubIdInput){
                return true;
            } else {
                alert(" Please enter your GitHub ID");
                return false;
            } 
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: "To install the application",
        default: 'npm install'
    },

    {
     type: 'input',
     name: 'usage',
     message: "Application used to install a professional readme following a few input prompts."   
    },

    {
        type: 'list',
        name: 'license',
        message: "What license would you like to use for this project?",
        choices: ['GNU GPLv3', 'BSD3', 'MIT'],
        default: 'GNU GPLv3'
    
    },

    {
        type: 'input',
        name: 'contribution',
        message: "Will anyone be contributing to this project with you, if so please enter their github Id.",
        
    },

    {
        type: 'input',
        name: 'tests',
        message: "To test the application run a command of 'npm test' ",
        default: "npm test"
    },
    {
        type: 'input',
        name: 'questions',
        message: "For any questions feel free to reach out to (Email): "
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const readmeData = generateMarkdown(answers);
        fs.writeFile('./README.md', readmeData, err => {
            if(err) throw new Error(err);
            
        console.log('Success: new README.md file is generated');


        });
    });
}

// Function call to initialize app
init();