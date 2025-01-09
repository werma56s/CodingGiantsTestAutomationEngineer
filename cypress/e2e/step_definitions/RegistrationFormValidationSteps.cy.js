import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RegistrationPage from "../pages/RegistrationPage.cy.js";
import BackgroundPage from "../pages/BackgroundPage.cy.js";
import {fieldLabels, checkboxInputsID} from "../../consts/consts"
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
    fields.shift();
    //cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable));
    RegistrationPage.clearFields(fields);
});

When('the user {string} the following checkboxes:', (isCheck, dataTable) => {
    const checkboxes = dataTable.rawTable.map(([checkbox]) => Object.keys(checkboxInputsID).find(key => checkboxInputsID[key] === checkbox));
    checkboxes.shift();
    cy.log(isCheck);
    if(isCheck === "checks"){
    RegistrationPage.checkCheckboxes(checkboxes);
    } 
    if(isCheck === "not checks"){
    RegistrationPage.verifyCheckboxesUnchecked(checkboxes);
}
});

When('the user clicks the {string} button', (buttonText) => {
    RegistrationPage.clickButton(buttonText);
});

Then("the following validation messages appear under each required field:", (dataTable) => {
    const fields = dataTable.rawTable.map(([label, message]) =>  {
        const key = Object.keys(fieldLabels).find(key => fieldLabels[key] === label);
        return { key, message };
    }); 
    fields.shift();
    cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable));
    RegistrationPage.assertValidationMessages(fields);
});

Then("the following alert appears: {string}", (alertText) => {
    RegistrationPage.assertAlert(alertText);
});

Then("the customer remains on the first step of the registration form", () => {
    RegistrationPage.assertStepVisible(1);
});

// Scenario: Verify correct error message appears for an incorrect email format
When('the user enters an invalid email format {string} in {string}', (email, fieldName) => {
    RegistrationPage.fillFields([{ Field: fieldName, Value: email }]);
});

Then("the following validation message appears under {string}:", (fieldName, validationMessage) => {
    RegistrationPage.assertValidationMessages([{ Field: fieldName, Message: validationMessage }]);
});

// Scenario: Verify correct error message appears for an incorrect phone number format
When('the user enters an invalid phone number {string} in {string}', (phoneNumber, fieldName) => {
    RegistrationPage.fillFields([{ Field: fieldName, Value: phoneNumber }]);
});

// Scenario: Verify successful submission of the first step with correct data
When("the user fills in the following fields:", (dataTable) => {
    RegistrationPage.fillFields(dataTable.hashes());
});


Then("the customer is redirected to the second step of the registration form", () => {
    RegistrationPage.assertStepVisible(2);
});

Then("the first step is marked as completed with a tick icon", () => {
    RegistrationPage.assertStepCompleted(1);
});

// Scenario: Verify the registration flow for online annual courses
When("the user selects the {string} tile", (tileName) => {
    RegistrationPage.selectTileOrOption(tileName);
});

When("the user selects the {string} option", (optionName) => {
    RegistrationPage.selectTileOrOption(optionName);
});

When("the user chooses the course {string}", (courseName) => {
    RegistrationPage.selectCourse(courseName);
});

When("the user selects a date that does not have {string}", (excludeText) => {
    RegistrationPage.selectDateExcluding(excludeText);
});

When("the user fills in the following additional fields:", (dataTable) => {
    RegistrationPage.fillFields(dataTable.hashes());
});

When('the user clicks the {string} button', (buttonText) => {
    RegistrationPage.clickButton(buttonText);
});

Then("the customer is redirected to the agreement step", () => {
    RegistrationPage.assertStepVisible("agreement");
});

Then("all steps up to the agreement step are marked as completed", () => {
    RegistrationPage.assertAllStepsCompleted();
});
