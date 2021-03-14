

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
  - [descripti on](#description)
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