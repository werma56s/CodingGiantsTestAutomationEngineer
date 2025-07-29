Feature: Registration Form Validation Tests
    Test cases for registration module of registration website

    Background: Navigate to the Website
        Given Navigate to the Website "https://devtest.giganciprogramowania.edu.pl/zapisz-sie"

    @required_fields
    Scenario: TC-01 Verify required fields for the first step of the registration form
    Given the user is on the first step of the registration form
    And the form fields are not prefilled
    When the user leaves the following fields empty:
        | Field                |
        | Imię opiekuna        |
        | Adres e-mail         |
        | Numer kontaktowy     |
        | Rok urodzenia dziecka|
    And the user "not checks" the following checkboxes:
        | Checkbox                                                        |
        | Akceptuję regulamin oraz zapoznałem się z polityką prywatności  |
        | Wyrażam zgodę na otrzymywanie informacji...                     |
    And the user clicks the "Dalej" button
    Then the following validation messages appear under each required field:
        | Field                | Message                |
        | Imię opiekuna        | Pole jest wymagane     |
        | Adres e-mail         | Pole jest wymagane     |
        | Numer kontaktowy     | Pole jest wymagane     |
        | Rok urodzenia dziecka| Pole jest wymagane     |
    And the following alert appears: "Prosimy uzupełnić wszystkie wymagane pola."
    And the customer remains on the first step of the registration form    

    @incorrect_fields
    Scenario: TC-02 Verify correct error message appears for an incorrect email format
    Given the user is on the first step of the registration form
    And the form fields are not prefilled
    When the user enters an invalid format "user#example.com" in "Adres e-mail"
    And the user clicks the "Dalej" button
    Then the following validation message appears under "Adres e-mail": "Nieprawidłowy adres e-mail"
    And the following alert appears: "Prosimy uzupełnić wszystkie wymagane pola."
    And the customer remains on the first step of the registration form

    @incorrect_fields
    Scenario: TC-03 Verify correct error message appears for an incorrect phone number format
    Given the user is on the first step of the registration form
    And the form fields are not prefilled
    When the user enters an invalid format "12345665" in "Numer kontaktowy"
    And the user clicks the "Dalej" button
    Then the following validation message appears under "Numer kontaktowy": "Niepoprawny numer telefonu. Numer powinien zawierać 9 cyfr, z opcjonalnym kierunkowym +48 lub +380 na początku."
    And the following alert appears: "Prosimy uzupełnić wszystkie wymagane pola."
    And the customer remains on the first step of the registration form

    @smoke_tests
    Scenario: TC-04 Verify successful submission of the first step with correct data
    Given the user is on the first step of the registration form
    And the form fields are not prefilled
    When the user fills in the following fields:
        | Field                | Value                                    |
        | Imię opiekuna        | Artur                                    |
        | Adres e-mail         | karolgiganci+fakedata80696@gmail.com     |
        | Numer kontaktowy     | 123456651                                |
        | Rok urodzenia dziecka| 2005                                     |
    And the user "checks" the following checkboxes:
        | Checkbox                                                        |
        | Akceptuję regulamin oraz zapoznałem się z polityką prywatności  |
        | Wyrażam zgodę na otrzymywanie informacji...                     |
    And the user clicks the "Dalej" button
    Then the customer is redirected to the second step of the registration form
    And the first step is marked as completed with a tick icon

    Scenario: TC-05 Verify the registration flow for online annual courses
    Given the user is on the first step of the registration form
    And the form fields are not prefilled
    When the user fills in the following fields:
        | Field                | Value                                    |
        | Imię opiekuna        | Artur                                    |
        | Adres e-mail         | karolgiganci+fakedata80696@gmail.com     |
        | Numer kontaktowy     | 123456651                                |
        | Rok urodzenia dziecka| 2005                                     |
    And the user "checks" the following checkboxes:
        | Checkbox                                                        |
        | Akceptuję regulamin oraz zapoznałem się z polityką prywatności  |
        | Wyrażam zgodę na otrzymywanie informacji...                     |
    And the user clicks the "Dalej" button
    And the user selects the "PROGRAMOWANIE" carousel tile
    And the user selects the "Online" tile
    And the user selects the "Roczne kursy z programowania" option
    And the user chooses the course "Pierwsze kroki w programowaniu (kurs z elementami AI) ONLINE"
    And the user selects a date that does not have "Zapisy na listę rezerwową"
    And the user fills in the following additional fields:
        | Field                | Value          |
        | Imię ucznia          | Maciej         |
        | Nazwisko ucznia      | Testowy        |
        | Nazwisko opiekuna    | Testowy        |
        | Kod pocztowy         | 26-900         |
    And the user clicks the "Zapisz dziecko" button
    Then the customer is redirected to the agreement step
    And all steps up to the agreement step are marked as completed
