
/// <reference types = "cypress" />

describe("TESTE: Validar IFRAME", () => {
  // Repete essa linha em todos os "it" em todos os grupos
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload(); // carrega pagina de novo
  });

  // Validar todos as mensagens de ALERT do sistema
  it("Validar página IFRAME", () => {

      cy.get("#frame1").then(iframe =>{
          const body = iframe.contents().find("body")
          cy.wrap(body).find("#tfield")
            .type("funciona?")
            .should("have.value", "funciona?")
      })
  });

  it("Validar IFRAME Diretamente", () => {

      cy.get("#otherButton").click()
      cy.on("window:alert", msg => {
        expect(msg).to.be.equal("Click OK!")     
      })
         
  })
  

});
