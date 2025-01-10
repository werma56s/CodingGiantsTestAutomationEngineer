import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../pages/RegistrationPage.cy.js";
import BackgroundPage from "../pages/BackgroundPage.cy.js";
import {fieldLabels, checkboxInputsID, coursesKindBroupNumber, fieldLabelsSaveToCourse} from "../../consts/consts"
// Background Step
Given("Navigate to the Website {string}", (url) => {
    BackgroundPage.enterURL(url);
});

// Scenario: Verify required fields for the first step of the registration form
Given("the user is on the first step of the registration form", () => {
    RegistrationPage.assertStepVisible(1);
});

Given("the form fields are not prefilled", () => {
    RegistrationPage.assertFieldsEmpty([
        "parentName", //Imię opiekuna
        "email", //Adres e-mail
        "phoneNumber", //Numer kontaktowy
        "birthYear", //Rok urodzenia dziecka
    ]);
});

When("the user leaves the following fields empty:", (dataTable) => {
    const fields = dataTable.rawTable.map(([label]) =>  Object.keys(fieldLabels).find(key => fieldLabels[key] === label)); 
    fields.shift(); // Remove the first element from the checkboxes array (header)
    //cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable));
    RegistrationPage.clearFields(fields);
});

When('the user {string} the following checkboxes:', (isCheck, dataTable) => {
    // Map through the rawTable data from dataTable, 
    // extract the first element (checkbox), and then find the corresponding key from checkboxInputsID.
    const checkboxes = dataTable.rawTable.map(([checkbox]) => Object.keys(checkboxInputsID).find(key => checkboxInputsID[key] === checkbox));
    checkboxes.shift(); // Remove the first element from the checkboxes array (header)
    cy.log(isCheck); // Log the value of isCheck (either "checks" or "not checks") for debugging purposes.
    if(isCheck === "checks"){ // If isCheck is equal to "checks", call the function to check the checkboxes on the page.
    RegistrationPage.checkCheckboxes(checkboxes);
    } 
    if(isCheck === "not checks"){// If isCheck is equal to "not checks", call the function to verify that checkboxes are unchecked on the page.
    RegistrationPage.verifyCheckboxesUnchecked(checkboxes);
}
});

When('the user clicks the {string} button', (buttonText) => {
    RegistrationPage.clickButton(buttonText);
});

Then("the following validation messages appear under each required field:", (dataTable) => {
    const fields = dataTable.rawTable.map(([label, message]) =>  {
        const key = Object.keys(fieldLabels).find(key => fieldLabels[key] === label); // Find the key in fieldLabels that matches the label from the current row.
        return { key, message };  // Return an object with key and message
    }); 
    fields.shift();// Remove the first element from the checkboxes array (header)
    cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable)); // Log the fields array and the raw table for debugging purposes, so we can see both data structures in the log.
    RegistrationPage.assertValidationMessages(fields); 
});

Then("the following alert appears: {string}", (alertText) => {
    RegistrationPage.assertAlert(alertText);
});

Then("the customer remains on the first step of the registration form", () => {
    RegistrationPage.assertStepVisible(1);
});

// Scenario: Verify correct error message appears for an incorrect email format
When('the user enters an invalid format {string} in {string}', (email, fieldName) => {
    // Find the key from fieldLabels object that corresponds to the provided fieldName.
    // It searches through the keys of fieldLabels to find the one where the value matches fieldName.
    const label = Object.keys(fieldLabels).find(key => fieldLabels[key] === fieldName)
    RegistrationPage.fillFields([{ Field: label, Value: email }]);
});

Then("the following validation message appears under {string}: {string}", (fieldName, validationMessage) => {
    // Find the key from fieldLabels object that corresponds to the provided fieldName.
    // It searches through the keys of fieldLabels to find the one where the value matches fieldName.
    const label = Object.keys(fieldLabels).find(key => fieldLabels[key] === fieldName)
    RegistrationPage.assertValidationMessages([{ key: label, message: validationMessage }]);
});

// Scenario: Verify successful submission of the first step with correct data
When("the user fills in the following fields:", (dataTable) => {
    // For each row, find the corresponding field label (Field) in the fieldLabels object.
    const fields = dataTable.rawTable.map(([label, Value]) =>  {
        // Find the key in fieldLabels that matches the label from the current row.
        const Field = Object.keys(fieldLabels).find(key => fieldLabels[key] === label);
        return { Field, Value };  // Return an object with the found Field and the Value from the row.
    }); 
    fields.shift(); // Remove the first element from the fields array
    cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable)); // Log the fields array and the raw table for debugging purposes
    RegistrationPage.fillFields(fields);
});


Then("the customer is redirected to the second step of the registration form", () => {
    RegistrationPage.assertStepVisible(2);
});

Then("the first step is marked as completed with a tick icon", () => {
    RegistrationPage.assertStepCompleted(1);
});

// Scenario: Verify the registration flow for online annual courses
When("the user selects the {string} carousel tile", (tileName) => {
    // Find the key in the coursesKindBroupNumber object that matches the given tileName.
    const number = Object.keys(coursesKindBroupNumber).find(key => coursesKindBroupNumber[key] === tileName)
    RegistrationPage.selectTile(number);
});

When("the user selects the {string} tile", (tileName) => {
    RegistrationPage.selectTileOption(tileName);
});

When("the user selects the {string} option", (optionName) => {
    RegistrationPage.selectOption(optionName);
});

When("the user chooses the course {string}", (courseName) => {
    RegistrationPage.selectCourse(courseName);
});

When("the user selects a date that does not have {string}", (excludeText) => {
    RegistrationPage.selectDateExcluding(excludeText);
});

When("the user fills in the following additional fields:", (dataTable) => {
    // For each row, find the corresponding field label (Field) in the fieldLabelsSaveToCourse object.
    const fields = dataTable.rawTable.map(([label, Value]) =>  {
        // Find the key in fieldLabelsSaveToCourse that matches the label from the current row.
        const Field = Object.keys(fieldLabelsSaveToCourse).find(key => fieldLabelsSaveToCourse[key] === label);
        return { Field, Value };  // Return an object with the found Field and the Value from the row.
    }); 
    fields.shift(); // Remove the first element from the checkboxes array (header)
    cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable)); // Log the fields array and the raw table for debugging purposes, so we can see both data structures in the log.
    RegistrationPage.fillFields(fields);
});

When('the user clicks the {string} button', (buttonText) => {
    RegistrationPage.clickButton(buttonText);
});

Then("the customer is redirected to the agreement step", () => {
    RegistrationPage.assertStepVisible(5);
});

Then("all steps up to the agreement step are marked as completed", () => {
    RegistrationPage.assertAllStepsCompleted();
});
