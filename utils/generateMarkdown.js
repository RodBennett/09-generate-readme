// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    Apache: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    ISC: "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)",
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Mozilla: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  if(license !== "None") {
  return badges[license]
  } else {
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    Apache: "https://opensource.org/licenses/Apache-2.0",
    ISC: "https://opensource.org/licenses/IPL-1.0",
    MIT: "https://opensource.org/licenses/MIT",
    Mozilla: "https://opensource.org/licenses/MPL-2.0"
  }
  if(license !== "None") {
    return links[license]
    } else {
      return " "
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
    return `### License 
   ${renderLicenseLink(license)}`
    } else {
      return " "
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

 return `${renderLicenseBadge(data.license)}

  # ${data.title}
  

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Test](#test)
  * [Contribution](#contribution)
  * [User](#user)
  * [GitHub repository](#github)
  * [Email](#email)
  * [Contact](#contact)
  

  ### Description
  ${data.description}
  
  ### Installation
  ${data.installation}
  
  ### Test
  ${data.test}
  
  ### Contribution
  ${data.contribution}
  
  ### User
  ${data.user}

  ### Github
  ${data.repository}

  ### Email
  ${data.email}

  ### Contact
  ${data.contact}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
