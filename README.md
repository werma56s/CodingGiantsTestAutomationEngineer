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

**Step 3 (Or Step 4): Open Cypress - Running Tests**
Once the installation is complete, you can open Cypress in the interactive mode:


    npx cypress open

This command will open the Cypress Test Runner, which allows you to select and run individual tests or run all tests in the suite.

![obraz](https://github.com/user-attachments/assets/8715a272-6ec3-43b0-88a6-449e4042ce90)

choose a broser and start

![obraz](https://github.com/user-attachments/assets/1b40aa25-02da-4a5e-a99f-c728882a7f7c)

In new browser instance you will see: 

![obraz](https://github.com/user-attachments/assets/2caaae5f-6c47-4aad-921e-38529cc462dc)

Click:

![obraz](https://github.com/user-attachments/assets/e0fc8f4d-d1c1-4fae-8327-bd36aab9a051)

Tests starts execute:

![obraz](https://github.com/user-attachments/assets/fc53bf27-a7e9-4db5-8965-83e112cfe937)

 

**(Step 3 or) Step 4: Running Tests in Headless Mode**
To run the tests in headless mode (without UI), use the following command:


    npx cypress run
or

    npm run cypress:run 

![obraz](https://github.com/user-attachments/assets/33e5a1bb-9c90-4c51-aa1c-52c2d822d84f)

After running the tests, the following folders will appear: cucamber_raport and screensots. (Command in the terminal: npm run cypress:run or npx cypress run)
This will execute all the tests.

**Step 5: Test Reports**
To run the Test Reports:


    npm run generate-report-per-browser

![obraz](https://github.com/user-attachments/assets/41977919-3167-405c-8d02-49e665872525)


After generating the report, an additional folder appears in cucumber_report/cucumber-html.
Report – feature level:

![obraz](https://github.com/user-attachments/assets/4625d1b8-fd9f-4883-9092-9ddb483632c0)


Report – Scenarios level:

![obraz](https://github.com/user-attachments/assets/42dbccd3-8b4a-4e2c-b9d2-41fc2ea302f9)

