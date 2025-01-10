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


**Step 2: Install Dependencies**
Install the necessary dependencies, including Cypress, by running:


    npm install

This will install all required packages listed in the package.json file.

**Step 3: Open Cypress - Running Tests**
Once the installation is complete, you can open Cypress in the interactive mode:


    npx cypress open

This command will open the Cypress Test Runner, which allows you to select and run individual tests or run all tests in the suite.

**Step 4: Running Tests in Headless Mode**
To run the tests in headless mode (without UI), use the following command:


    npx cypress run

![obraz](https://github.com/user-attachments/assets/b77c0ebc-6606-4073-bafc-d2b6587e957e)


This will execute all the tests in the cypress/integration folder.

**Step 5: Test Reports**
To run the Test Reports:


    npm run generate-report-per-browser

![obraz](https://github.com/user-attachments/assets/afab054e-4aae-44a4-ac8a-1850d2b0ed42)

Report – feature level:
![obraz](https://github.com/user-attachments/assets/a54bf2f7-3257-43b3-a2e1-e94f963a6a2a)

Report – Scenarios level:
![obraz](https://github.com/user-attachments/assets/9f213679-a56d-4098-8405-84638667e197)
