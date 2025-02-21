beforeEach(() => {
    // Code that will be executed before each test
    cy.clearLocalStorage(); // Clearing local storage before each test
    // You can add other actions that should be performed before each test
    // For example, you might want to reset the database if necessary
    // cy.request('POST', '/reset-db'); // Example of resetting the database
  });