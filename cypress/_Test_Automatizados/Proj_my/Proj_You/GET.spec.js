/// <reference types = "cypress" />

describe("Testar GET ", () => {
  before(() => {
    //cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.visit(
      "https://onariplanejados.com.br/?gclid=Cj0KCQjw8_qRBhCXARIsAE2AtRZXBFMDrKp893z-leiM361kzPjjkg7lYS9rvBpSzM2gJUSgq3IxStQaAoUgEALw_wcB"
    );
  });

  it("Obter elemento com GET", () => {
    cy.get("#mat-input-0").type("Ramoni").should("have.value", "Ramoni");
  });
});
