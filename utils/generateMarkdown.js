// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache-2.0':
      return '![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL-3.0':
      return '![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg)';
    case 'BSD-2-Clause':
      return '![BSD 2-Clause License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)';
    case 'BSD-3-Clause':
      return '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    case 'LGPL-3.0':
      return '![GNU Lesser General Public License v3.0](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)';
    case 'MPL-2.0':
      return '![Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
    case 'EPL-2.0':
      return '![Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)';
    case 'ISC':
      return '![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)';
    case 'AGPL-3.0':
      return '![GNU Affero General Public License v3.0](https://img.shields.io/badge/License-AGPL%203.0-red.svg)';
    case 'GPL-2.0':
      return '![GNU General Public License v2.0](https://img.shields.io/badge/License-GPL%202.0-blue.svg)';
    case 'Artistic-2.0':
      return '![Artistic License 2.0](https://img.shields.io/badge/License-Artistic%202.0-blue.svg)';
    case 'Unlicense':
      return '![The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    case 'MS-PL':
      return '![Microsoft Public License (MS-PL)](https://img.shields.io/badge/License-MS--PL-brightgreen.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'Apache-2.0':
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'GPL-3.0':
      return '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD-2-Clause':
      return '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD-3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'LGPL-3.0':
      return '[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)';
    case 'MPL-2.0':
      return '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)';
    case 'EPL-2.0':
      return '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)';
    case 'ISC':
      return '[ISC License](https://opensource.org/licenses/ISC)';
    case 'AGPL-3.0':
      return '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GPL-2.0':
      return '[GNU General Public License v2.0](https://www.gnu.org/licenses/gpl-2.0)';
    case 'Artistic-2.0':
      return '[Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)';
    case 'Unlicense':
      return '[The Unlicense](http://unlicense.org/)';
    case 'MS-PL':
      return '[Microsoft Public License (MS-PL)](https://opensource.org/licenses/MS-PL)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return `This project is licensed under the ${renderLicenseLink(license)}. The MIT License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It only requires that you include the original copyright notice in your project.`;
    case 'Apache-2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}.  The Apache License 2.0 is an open-source license that provides more specific terms and conditions for using and distributing software. It includes provisions related to patents and contributions.`;
    case 'GPL-3.0':
      return `This project is licensed under the ${renderLicenseLink(license)}. The GNU GPL v3.0 is a strong copyleft license that requires any derivative works or modifications to also be released under the same license. It promotes open-source software and ensures that modifications are also open source.`;
    case 'BSD-2-Clause':
      return `This project is licensed under the ${renderLicenseLink(license)}. The BSD 2-Clause License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It only requires that you include the original copyright notice in your project.`;
    case 'BSD-3-Clause':
      return `This project is licensed under the ${renderLicenseLink(license)}. The BSD 3-Clause License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It requires you to include the original copyright notice, disclaimer, and attribution notices in your project.`;
    case 'LGPL-3.0':
      return `This project is licensed under the ${renderLicenseLink(license)}. The GNU LGPL v3.0 is a weaker copyleft license compared to the GPL. It allows you to use the library in your projects without requiring your entire project to be open source. Modifications to the library, however, must be open source.`;
    case 'MPL-2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}.  The Mozilla Public License 2.0 is an open-source license that allows you to use, modify, and distribute the code in your projects. It includes provisions related to patents and contributions.`;
    case 'EPL-2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}. The Eclipse Public License 2.0 is an open-source license commonly used for software developed in the Eclipse ecosystem. It allows you to use, modify, and distribute the code in your projects.`;
    case 'ISC':
      return `This project is licensed under the ${renderLicenseLink(license)}. The ISC License is a permissive open-source license that allows you to use, modify, and distribute the code in your projects. It's a simple and concise license.`;
    case 'AGPL-3.0':
      return `This project is licensed under the ${renderLicenseLink(license)}. The GNU AGPL v3.0 is similar to the GPL but includes an additional requirement for web applications. If you use AGPL-licensed code in a web application, you must make the source code of the application available to users.`;
    case 'GPL-2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}. The GNU GPL v2.0 is a strong copyleft license similar to GPL-3.0. It requires that any derivative works or modifications also be released under the same license.`;
    case 'Artistic-2.0':
      return `This project is licensed under the ${renderLicenseLink(license)}. The Artistic License 2.0 is an open-source license that allows you to use, modify, and distribute the code in your projects. It includes provisions related to distribution and attribution.`;
    case 'Unlicense':
      return `This project is licensed under the ${renderLicenseLink(license)}. The Unlicense is an open-source license that effectively places your code in the public domain, allowing others to use, modify, and distribute it without any restrictions.`;
    case 'MS-PL':
      return `This project is licensed under the ${renderLicenseLink(license)}. The Microsoft Public License is an open-source license that allows you to use, modify, and distribute the code in your projects. It includes provisions related to patents and contributions.`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## User Story

  
  AS A developer
  I WANT a README generator
  SO THAT I can quickly create a professional README for a new project
  

  ## Acceptance Criteria

  
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  

  ## Screenshot

  The following image shows the README application's appearance and functionality:

  ![Professional README Generator](./assets/images/Professional-README-Generator.png "Screenshot")
  
  ## Table of Contents
  - [Description](#description)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  The following necessary dependencies must be installed to run the application.
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)}
  
  ## Contributing
  Contributors: ${data.contributing}
  
  ## Tests
  The following is needed to run the test: ${data.tests}
  
  ## Questions
  If you have any questions or encounter any issues, please feel free to [open an issue](https://github.com/mxrtinee/Professional-README-Generator/issues) or contact me directly:<br>
  GitHub: [${data.github}](https://github.com/${data.github})<br>
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
