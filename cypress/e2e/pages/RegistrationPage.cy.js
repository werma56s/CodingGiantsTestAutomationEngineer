class RegistrationPage {
    // Assert the current step of the form
    assertStepVisible(stepNumber) {
        cy.get(`.feature_registration-menu__item.d-flex.align-items-center.justify-content-center`).eq(stepNumber-1).should('have.class', 'feature_registration-menu__item--active');
    }

    // Clear the inputs for the given fields
    clearFields(fields) {
        fields.forEach((field) => {
            cy.get(`input[name="${field}"]`).clear();
        });
    }

    // Verify input fields are not prefilled
    assertFieldsEmpty(fields) {
        fields.forEach((field) => {
            cy.get(`input[name="${field}"]`).should("have.value", "");
        });
    }

    // Uncheck checkboxes and verify they are unchecked
    verifyCheckboxesUnchecked(checkboxes) {
        checkboxes.forEach((checkbox) => {
            cy.get(`#${checkbox}`).should("have.value", "0");
        });
    }

    // Check specified checkboxes
    checkCheckboxes(checkboxes) {
        checkboxes.forEach((checkbox) => {
            cy.get(`#${checkbox}`).click({ force: true });;
        });
    }

    // Click a button by its visible text
    clickButton(buttonText) {
        cy.contains("button", buttonText).click();
    }

    // Fill fields with provided data
    fillFields(data) {
        data.forEach((row) => {
            cy.get(`input[name="${row.Field}"]`).type(row.Value);
        });
    }

    // Assert validation messages under inputs
    assertValidationMessages(messages) {
        cy.log('messages:', JSON.stringify(messages));
        messages.forEach(({ key, message }) => {
            cy.log('field:', key, 'message', message);
            cy.get(`input[name="${key}"]`)
                .parent()
                .parent()
                .find('.formError')
                .should("contain", message);
        });
    }

    // Assert an alert appears with a specific text
    assertAlert(alertText) {
        cy.get(".alert").should("contain", alertText);
    }

    // Select a tile or option by its text
    selectTileOrOption(text) {
        cy.contains(".tile, .option", text).click();
    }

    // Select a course by its name
    selectCourse(courseName) {
        cy.contains(".course-tile", courseName).within(() => {
            cy.contains("button", "Wybierz").click();
        });
    }

    // Select a date excluding specific text
    selectDateExcluding(excludeText) {
        cy.get(".date-list .date-item").not(`:contains("${excludeText}")`).first().click();
    }

    // Assert a completed step with a tick icon
    assertStepCompleted(stepNumber) {
        cy.get(`.feature_registration-menu__item.d-flex.align-items-center.justify-content-center`)
        .eq(stepNumber-1)
        .find('.feature_registration-menu__item-tick')
        .should('have.class', "icon-tick");
    }

    // Assert multiple steps are completed
    assertAllStepsCompleted() {
        cy.get(".steps .step.completed").should("have.length.greaterThan", 1);
    }
}

export default new RegistrationPage();