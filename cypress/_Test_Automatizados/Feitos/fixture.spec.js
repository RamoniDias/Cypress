//**********************************************************************************//
// Serve para importar arquivos externos e testa-los, campo por campo
//**********************************************************************************//

/// <reference types = "cypress" />

describe("Testar: Fixture", () => {
  // Repete essa linha em todos os "it" em todos os grupos
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload(); // carrega pagina de novo
  });

   it("Validar: Pegar dados Externos da Fixture ", function() {
    //         Nome arquivo    Dê um nome      nome da promise 
    cy.fixture("userData").as("usuario").then(function() {
       //             Preencher(Este.arquivo.nome)      
       cy.get("#formNome").type(this.usuario.nome) //Pegar o nome da Fixture
       cy.get("#formSobrenome").type(this.usuario.sobrenome);
       cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
       cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
       cy.get("#formEscolaridade").select(this.usuario.escolaridade)
       cy.get("#formEsportes").select(this.usuario.esportes)
       cy.get("#formCadastrar").click()
       cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado")

    })
    
  
  
   })

});  