/// <reference types = "cypress" />

describe("Capiturar Elementos", () => {
  before(() => {
    //cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("Elementos", () => {
    cy.get('[name="formSexo"][value="M"] ').should("exist");
  });
});
