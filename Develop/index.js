const fs = require("fs");
const inquirer = require("inquirer");

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
            message: "Link to this project?",
            name: "link"
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
            message: "Contribution Guidelines",
            name: "contributions"
        },
        {
            type: "input",
            message: "Add test description here",
            name: "test"
        },
        {
            type: "input",
            message: "Add test image URL here",
            name: "testURL"
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
        const test = data.test;
        const testURL = data.testURL;
        const link = data.link;
        
        fs.writeFile("README.md",
            `# ${titles} 

[![Generic badge](https://img.shields.io/badge/License-${license}-blue.svg)](https://shields.io/)

${descr}

You can find this project here: ${link}

## Table of contents

* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [License](#license)
* [Test](#test)
* [Questions](#questions)
            
            
## Installation instructions
    ${insta}

## Usage
${usage}

## Contribution Guidelines
    ${contri}

## License

This readme file is under the ${license} license.

## Test
${test}

![Image of test](${testURL})

## Questions

If you have any questions you can contact me here:

* Github username: ${githubName}
* Github profile: ${githubURL}
* Email: ${email}


            `
            , function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            })
    });
    

