/// <reference types = "cypress" />

describe('ELEMENTOS', () => {
    
    // Repete essa linha em todos os "it" em todos os grupos
    before(() => { 
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    });

    beforeEach(() => { 
        cy.reload() // carrega pagina de novo
    });

    it('Testar "TEXTOS"', () => {

        // Texto da tela através do Body tem tudo nele
        cy.get("body")// pode ser span, body, label deu errado
            .should("contain", "Cuidado").type("**1: APROVADO!**")

        cy.get("span")
            .should("contain", "Cuidado")
        });

    it('Testar "LINKS"', () => {
        
      //cy.get(a).click() Não pegou o link "a"  
        cy.get('[href="#"]').click()
        cy.get("#resultado").should("have.text", "Voltou!")

        cy.reload() // Recarregar Tela
        cy.get("#resultado").should("have.not.text", "Voltou!")
        cy.contains("Voltar").click() // outra forma de pegar elementos
        cy.get("#resultado").should("have.text", "Voltou!")
    });
    
    it('Testar "CAMPOS" númericos ous Alfa numericos', () => {

        // Nome:
        cy.get('#formNome').type("Nome")
            .should("have.value", "Nome")

        // Sobrenome:   
        cy.get('[data-cy=dataSobrenome]')
            .type("Teste 12345{backspace}{backspace}") //Colocar tecla do teclado entre chaves
             // PRINTAR  as evidencias  
                  
        // Test ÁREA quadrado Teste 1:
        cy.get('#elementosForm\\:sugestoes')
           .type("testArea: 1")
            .should("contain.value", "testArea")
        
        // Test ÁREA quadrado Teste 2:
        // ja tem algo escrito que q limpar o campo antes p/ outro teste
        cy.get('#elementosForm\\:sugestoes')
           .clear() //Limpando o campo para o 2° teste nesse campo
           .type("Erro{selectall}acerto",{ delay: 100 }) //Selecionando todo o campo
           .should("have.value", "acerto")
    });

    it('Testar "RÁDIO BUTON": Bolinha selecionável', () => {
        
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

    it('Testar "CHECKBOX"', () => {
    // Checkbox Selecionado CARNE, clicou tem q ser "be" não clicou "not be"
        cy.get('#formComidaCarne').click().should("be.checked")

        cy.get('[name=formComidaFavorita]').click({ multiple: true }).should("be.checked")
            
        cy.get('#formComidaPizza').click().should("not.be.checked")

        cy.get('#formComidaVegetariana').click().should("not.be.checked")
               
    });

    it('Testar "COMB0 BOX"', () => {
           
        cy.get('[data-test=dataEscolaridade]').select("2o grau completo") 
           .should("have.value", "2graucomp")

        cy.get('[data-test=dataEscolaridade]').select("1graucomp")
           .should("have.value", "1graucomp")   

        cy.get('[data-test=dataEscolaridade] option')
        .should("have.length", 8) 

        //Validar quais Elementos tem o COMBO
        cy.get('[data-test=dataEscolaridade] option').then($arr =>{
            const values = [] 
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
    
        }) 
             
    })

     it.only('Testar "COMB0 MULTIPLO"', () => {
           
        cy.get('[data-testid=dataEsportes]')
           .select(["natacao", "Corrida", "nada"])

         //Validar quais opções estão selecionadas nesse COMBO MULTIPLO  
        // cy.get('[data-testid=dataEsportes]')
        //   .should("have.value",["natacao", "Corrida", "nada"])Não Funciona

        cy.get('[data-testid=dataEsportes]').then($el => {

            expect($el.val()).to.be.deep.equal(["natacao", "Corrida", "nada"])
            expect($el.val()).to.have.length(3)
        })
        // O array que voltar vc ja testa a resposta
        cy.get('[data-testid=dataEsportes]')
           .invoke("val")
           .should("eql", ["natacao", "Corrida", "nada"]) 
    });

});




