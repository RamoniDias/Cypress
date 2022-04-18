
/// <reference types = "cypress" />

describe("TESTE: URL", () => {
  // Repete essa linha em todos os "it" em todos os grupos
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload(); // carrega pagina de novo
  });

   it("Validar se Popup URL", () => {

    cy.contains("Popup2")
        .should("have.prop", "href")// Validar a propriedade
        .and("equal", "https://wcaquino.me/cypress/frame.html") //validar a url = site
    })

});    