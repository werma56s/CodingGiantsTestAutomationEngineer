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
When('the user enters an invalid format {string} in {string}', (email, fieldName) => {
    const label = Object.keys(fieldLabels).find(key => fieldLabels[key] === fieldName)
    RegistrationPage.fillFields([{ Field: label, Value: email }]);
});

Then("the following validation message appears under {string}: {string}", (fieldName, validationMessage) => {
    const label = Object.keys(fieldLabels).find(key => fieldLabels[key] === fieldName)
    RegistrationPage.assertValidationMessages([{ key: label, message: validationMessage }]);
});

// Scenario: Verify successful submission of the first step with correct data
When("the user fills in the following fields:", (dataTable) => {
    const fields = dataTable.rawTable.map(([label, Value]) =>  {
        const Field = Object.keys(fieldLabels).find(key => fieldLabels[key] === label);
        return { Field, Value };
    }); 
    fields.shift();
    cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable));
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
    const fields = dataTable.rawTable.map(([label, Value]) =>  {
        const Field = Object.keys(fieldLabelsSaveToCourse).find(key => fieldLabelsSaveToCourse[key] === label);
        return { Field, Value };
    }); 
    fields.shift();
    cy.log(JSON.stringify(fields), JSON.stringify(dataTable.rawTable));
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
