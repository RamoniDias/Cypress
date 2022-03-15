
/// <reference types = "cypress" />

describe('TESTE: Validar Mensagens', () => {
    
    // Repete essa linha em todos os "it" em todos os grupos
    before(() => { 
      cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    });

    beforeEach(() => { 
      cy.reload() // carrega pagina de novo
    });
 
    // Validar todos as mensagens de ALERT do sistema 
    it('Validar Mensagem do Alert do campos', () => {
       // usar stub para validar Alert do Windows, fazer isso sempre
        const stub = cy.stub().as("alerta") 

        cy.on("window:alert", stub)
        cy.get("#formCadastrar").click()
           .then(() => expect(stub.getCall(0)).to.be.calledWith("Nome eh obrigatorio"));
          //Validar frase do Alert

        cy.get("#formNome").type("Ramoni"); 
        cy.get("#formCadastrar")
           .click()
           .then(() => expect(stub.getCall(1)).to.be.calledWith("Sobrenome eh obrigatorio"));//Validar frase do Alert

        cy.get("#formSobrenome").type("Dias");
        cy.get("#formCadastrar")
           .click()
           .then(() =>
            expect(stub.getCall(2)).to.be.calledWith("Sexo eh obrigatorio"));
        
        cy.get("#formSexoMasc").click()
        cy.get("#formCadastrar").click()

    });

});     