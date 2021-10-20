/// <reference types = "cypress" />


describe('Elements', () => {

    before(() => { // Repete essa linha em todos os "it" em todos os grupos
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    });

    beforeEach(() => { 
        cy.reload
    });

    it('Texto', () => {

        // Texto da tela através do Body tem tudo nele
        cy.get("body")// pode ser span, body, label deu errado
          .should("contain", "Cuidado")

        cy.get("span")
           .should("contain", "Cuidado")
    
        });

    it('Link', () => {
        
      //cy.get(a).click() Não pegou o link "a"  
        cy.get('[href="#"]').click()
        cy.get("#resultado").should("have.text", "Voltou!")

        cy.reload() // Recarregar Tela
        cy.get("#resultado").should("have.not.text", "Voltou!")
        cy.contains("Voltar").click() // outra forma de pegar elementos
        cy.get("#resultado").should("have.text", "Voltou!")
    });
});

describe('Elements: 02', () => {

    it('Externo', () => {
        
    });
    
});
