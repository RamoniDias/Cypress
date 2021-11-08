/// <reference types = "cypress" />


describe('Elements: 01', () => {
    
    // Repete essa linha em todos os "it" em todos os grupos
    before(() => { 
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    });

    beforeEach(() => { 
        cy.reload // carrega pagina de novo
    });

    it('Texto', () => {

        // Texto da tela através do Body tem tudo nele
        cy.get("body")// pode ser span, body, label deu errado
            .should("contain", "Cuidado").type("**1: APROVADO!**")

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
    
    it('Testar Campos númericos ous Alfa numericos', () => {

        // Nome:
        cy.get('#formNome').type("Nome")
            .should("have.value", "Nome")

        // Sobrenome:   
        cy.get('[data-cy=dataSobrenome]')
            .type("Teste 12345{backspace}{backspace}") //Colocar tecla do teclado entre chaves
                  
        // Test ÁREA quadrado Teste 1:
        cy.get('#elementosForm\\:sugestoes')
           .type("testArea: 1")
            .should("contain.value", "testArea")
        
        // Test ÁREA quadrado Teste 2:
        // ja tem algo escrito que q limpar o campo antes p/ outro teste
        cy.get('#elementosForm\\:sugestoes')
           .clear() //Limpando o campo para o 2° teste nesse campo
           .type("Erro{selectall}acerto",{ delay: 100 })
           .should("have.value", "acerto")
    });

    it.only('Testar Radio Buton: Bolinha selecionável', () => {
        
        // Verif que o masculino esta com boinha checado e o feminino não
        // sexo masculino
        cy.get('#formSexoMasc')
          .click()
          .should("be.checked")

        // sexo feminino 
        cy.get('#formSexoFem').should("not.be.checked")

        // Verifica se tem 2 elementos com esse nome
        cy.get("[name = 'formSexo']").should("have.length",2)
        
    });

});

