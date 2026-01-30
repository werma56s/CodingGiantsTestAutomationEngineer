# CodingGiantsTestAutomationEngineer
Test cases for registration module of registration website

# Table of Contents

1. [Project Configuration](#codinggiantstestautomationengineer)
2. [Jenkins Configuration on Windows](#jenkinsconfigurationwindows)

---
<a name="codinggiantstestautomationengineer"/> </a>
## Project Configuration 

Before setting up Cypress, make sure the following tools are installed on your system:  

    Node.js (version 18.19 or later) - Install Node.js  
    npm (Node Package Manager) - Comes with Node.js
    Visual Studio Code

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

Choose a browser and start:

![obraz](https://github.com/user-attachments/assets/1b40aa25-02da-4a5e-a99f-c728882a7f7c)

In new browser instance you will see: 

![obraz](https://github.com/user-attachments/assets/2caaae5f-6c47-4aad-921e-38529cc462dc)

Click:

![obraz](https://github.com/user-attachments/assets/e0fc8f4d-d1c1-4fae-8327-bd36aab9a051)

Tests starts execute:

![obraz](https://github.com/user-attachments/assets/fc53bf27-a7e9-4db5-8965-83e112cfe937)

 

**(Optional)(Step 3 or) Step 4: Running Tests in Headless Mode**
To run the tests in headless mode (without UI), use the following command:


    npx cypress run
or

    npm run cypress:run 

![obraz](https://github.com/user-attachments/assets/33e5a1bb-9c90-4c51-aa1c-52c2d822d84f)

After running the tests, the following folders will appear: cucumber_report and cypress/screenshots.

**(Optional) Step 5: Test Reports**
To run the Test Reports:


    npm run generate-report-per-browser

![obraz](https://github.com/user-attachments/assets/41977919-3167-405c-8d02-49e665872525)


After generating the report, an additional folder appears in cucumber_report/cucumber-html.
Report – feature level:

![obraz](https://github.com/user-attachments/assets/4625d1b8-fd9f-4883-9092-9ddb483632c0)


Report – Scenarios level:

![obraz](https://github.com/user-attachments/assets/42dbccd3-8b4a-4e2c-b9d2-41fc2ea302f9)

---
<a name="jenkinsconfigurationwindows"/> </a>
## Jenkins Configuration on Windows

---

## Prerequisites
- Jenkins installed on Windows
- Git repository with a `Jenkinsfile`
- Internet access to download plugins and NodeJS versions

---

## Step-by-Step Guide

### 1. Install Jenkins on Windows
Download and install Jenkins for Windows from the official [Jenkins Website](https://www.jenkins.io/download/).

### 2. Install NodeJS Plugin
- Navigate to: **Manage Jenkins** → **Manage Plugins**
- Go to the **Available** tab
- Search for **NodeJS**
- Install the **NodeJS Plugin**
- Restart Jenkins if required

### 3. Configure NodeJS in Global Tool Configuration
- Navigate to: **Manage Jenkins** → **Global Tool Configuration**
- Scroll down to **NodeJS**
- Click **Add NodeJS**
  - Name: (e.g., `Node 18.x`)
  - Check **Install automatically**
  - Choose the required Node.js version (e.g., 18.x)
- Save the configuration

### 4. Create a New Pipeline Job
- Go to the Jenkins Dashboard
- Click **New Item**
- Enter an item name
- Select **Pipeline**
- Click **OK**

### 5. Configure Pipeline Definition
In the Pipeline job configuration:
- Scroll down to the **Pipeline** section
- Set **Definition** to: `Pipeline script from SCM`
- Select **SCM**: `Git`
- Repository URL: `<your-git-repo-url>`
- Branch Specifier: `<your-branch>` (e.g., `*/main`)
- Script Path: `Jenkinsfile`

### 6. Run the Pipeline
- Go to the Pipeline job page
- Click **Build Now** to trigger the pipeline

---

## Expected Result
- Jenkins will pull the repository
- Use the specified NodeJS version configured in Global Tools
- Execute all steps defined in the `Jenkinsfile`
- The build should complete successfully

<img width="1856" height="878" alt="obraz" src="https://github.com/user-attachments/assets/de9be7ea-e77a-4915-9e22-43bcd9b62339" />
---

## Example `Jenkinsfile` (Node.js Build Example)
```groovy
pipeline {
    agent {
        node {
            label 'built-in'
        }
    }
    tools {
        nodejs 'Node 18.x' // Name as configured in Global Tools
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}


