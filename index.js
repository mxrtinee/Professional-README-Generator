// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    name:"title",
    message:"What is the title of your project?"
  },
  {
    type:'input',
    name:"description",
    message:"Provide a description of what you are making"
  },
  {
    type:'list',
    name:"license",
    message:"Choose which license to use:",
    choices: [
      {
        name: 'MIT License',
        value: 'MIT',
      },
      {
        name: 'Apache License 2.0',
        value: 'Apache-2.0',
      },
      {
        name: 'GNU General Public License v3.0',
        value: 'GPL-3.0',
      },
      {
        name: 'BSD 2-Clause "Simplified" License',
        value: 'BSD-2-Clause',
      },
      {
        name: 'BSD 3-Clause "New" or "Revised" License',
        value: 'BSD-3-Clause',
      },
      {
        name: 'GNU Lesser General Public License v3.0',
        value: 'LGPL-3.0',
      },
      {
        name: 'Mozilla Public License 2.0',
        value: 'MPL-2.0',
      },
      {
        name: 'Eclipse Public License 2.0',
        value: 'EPL-2.0',
      },
      {
        name: 'ISC License (ISC)',
        value: 'ISC',
      },
      {
        name: 'GNU Affero General Public License v3.0',
        value: 'AGPL-3.0',
      },
      {
        name: 'GNU General Public License v2.0',
        value: 'GPL-2.0',
      },
      {
        name: 'Artistic License 2.0',
        value: 'Artistic-2.0',
      },
      {
        name: 'The Unlicense',
        value: 'Unlicense',
      },
      {
        name: 'Microsoft Public License (MS-PL)',
        value: 'MS-PL',
      },
    ],
  },
  {
    type:'input',
    name:"installation",
    message:"How do users install it?",
  },
  {
    type:'input',
    name:"usage",
    message:"How does one use it? Provide examples and code snippets.",
  },
  {
    type:'input',
    name:"contribution",
    message:"Who contributed on this project (if applicable)?"
  },
  {
    type:'input',
    name:"test",
    message:"Write tests here using jest or mocha (if applicable)."
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md has been successfully generated!");
    }
  });
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
