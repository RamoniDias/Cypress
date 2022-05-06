/// <reference types = "cypress" />

describe("Testar Input", () => {
  before(() => {
    //cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("Input String", () => {
    cy.get("#formNome").should("have.value", "");
    cy.get("#formNome").type("Ramoni");
    cy.get("#formNome").should("have.value", "Ramoni");
    cy.get("#formNome").should("not.have.value", "");
  });
});
