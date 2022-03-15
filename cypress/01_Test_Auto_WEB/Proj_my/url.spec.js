
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

    //Pegar LINK da TELA dinâmicamente
    it("Validar Link dinâmicamente", () => {
        cy.contains("Popup2").then($a => {
            const href = $a.prop("href")
            cy.visit(href)
            //cy.get("#tfield").type("Funciona")
        })
    })   
    
    it("Validar Forçar Link abrir na msm página", () => {
      cy.contains("Popup2")
        .invoke("removeAttr", "target")// Remove atributo do HTML Target, evitando ele de rediricionar para outra pagina
        .click()//Mantem na msm pagina/ Importante colocar
        

    });


}); 



