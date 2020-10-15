const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
// const questions = [

// ];
inquirer
    .prompt([
        {
            type: "input",
            message: "What's the title?",
            name: "title"
        },
        {
            type: "input",
            message: "What's the description?",
            name: "description"
        },
        {
            type: "input",
            message: "Installation instructions",
            name: "installation"
        },
        {
            type: "input",
            message: "What's the usage",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed?",
            name: "contributions"
        },
        {
            type: "input",
            message: "What's your Github username?",
            name: "github"
        },
        {
            type: "input",
            message: "What's your Github profile URL?",
            name: "githubURL"
        },
        {
            type: "input",
            message: "What's your email",
            name: "email"
        },
        {
            type: "list",
            message: "What's your License",
            name: "license",
            choices: [
                "Apache", 
                "GNU",
                "MIT",
                "BSD",
                "Boost",
                "Creative",
                "Eclipse",
                "GNU",
                "Unilicense"
            ]
        }
    ])
    .then(function (data) {
        console.log(data);
        const titles = data.title;
        const descr = data.description;
        const insta = data.installation;
        const usage = data.usage;
        const contri = data.contributions;
        const githubName = "https://github.com/" + data.github;
        const email = data.email;
        const license = data.license;
        const githubURL = data.githubURL;
        
        fs.writeFile("README.md",
            `# ${titles} 

[![Generic badge](https://img.shields.io/badge/License-${license}-blue.svg)](https://shields.io/)

${descr}

## Table of contents

* [Installation](#installation-instructions) \n
* [Usage](#usage) \n
* [Contributions](#contributions) \n
* [Questions](#questions) \n
            
            
## Installation instructions
${insta}

## Usage
${usage}

## Contributions
${contri}

## Questions
Github username: ${githubName}

Github profile: ${githubURL}

Contact me at ${email}


            `
            , function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            })
    });
    

