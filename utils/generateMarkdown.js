// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   //console.log("YO", data)
//   return `# ${data.title}
// STUFf ${data.Github}
// usage ${data.usage}
// `;
// }

// module.exports = generateMarkdown;
// function to generate markdown for README
//Uses template literals to get data from the inquirer prompts and insert it into the markdown.


//Function for the generate Markdown. This function defines data.
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ![](https://img.shields.io/badge/License-${data.license}-blue)
  ## Description 
  ${data.description}
  ## Table of Contents:
  - [Title](#Title)
  - [Github](#Github)
  - [description](#description)
  - [installation](#installation)
  - [usage](#usage)
  - [License](#License)
  - [contributing](#contributing)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  For any questions, [mailto:${data.email}], or visit my [GitHub] (https://github.com/${data.Github}) 
 `;
}

module.exports = generateMarkdown;