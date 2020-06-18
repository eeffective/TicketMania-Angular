describe("Authentication", () => {
  it("should show sign in modal", () => {
    cy.visit("/home");
    cy.get("#login").click();
    cy.get("#inloggen").should("contain", "Inloggen");
  });
  it("should show sign up modal", () => {
    cy.visit("/home");
    cy.get("#login").click();
    cy.get("#kanus").click();
    cy.get(
      "#panel8 > .modal-body > form.ng-untouched > .text-center > .btn"
    ).should("contain", "Registreren");
  });

  it("should log admin in", () => {
    cy.visit("/home");
    cy.get("#login").click();
    cy.get("#userameinput").type(Cypress.config("adminUsername"));
    cy.get("#passwordinput").click();
    cy.get("#passwordinput").type("admin");
    cy.get("#loginsubmit").click();
    cy.wait(2000);
    cy.get('.nav-item > .btn').should("contain", "Mijn account");
  });

  it("should log user in", () => {
    cy.visit("/home");
    cy.get("#login").click();
    cy.get("#userameinput").type(Cypress.config("userUsername"));
    cy.get("#passwordinput").click();
    cy.get("#passwordinput").type(Cypress.config("userPassword"));
    cy.get("#loginsubmit").click();
    cy.wait(2000);
    cy.get('.nav-item > .btn').click();
    cy.get('.nav-item > .btn').click();
    cy.get('.mr-sm-2 > .nav-item > .dropdown-menu > :nth-child(1)').should('be.visible');
  });
});
