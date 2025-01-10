# CodingGiantsTestAutomationEngineer
[Recruitment] Test cases for registration module of registration website

Before setting up Cypress, make sure the following tools are installed on your system:
    Node.js (version 12 or later) - Install Node.js
    npm (Node Package Manager) - Comes with Node.js

Setup Instructions
**Step 1: Clone the Repository**
Start by cloning the repository to your local machine:

git clone https://github.com/werma56s/CodingGiantsTestAutomationEngineer.git
cd CodingGiantsTestAutomationEngineer

**Step 2: Install Dependencies
**Install the necessary dependencies, including Cypress, by running:

npm install

This will install all required packages listed in the package.json file.

**Step 3: Open Cypress**
Once the installation is complete, you can open Cypress in the interactive mode:

npx cypress open

This command will open the Cypress Test Runner, which allows you to select and run individual tests or run all tests in the suite.

**Step 4: Running Tests in Headless Mode**
To run the tests in headless mode (without UI), use the following command:

npx cypress run

This will execute all the tests in the cypress/integration folder.

**Step 5: Test Reports**
To run the Test Reports:

npm run generate-report-per-browser
