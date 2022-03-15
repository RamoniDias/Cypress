//**********************************************************************************//
// Serve para testar dinâmicamente, com laço de repetição várias opções
//**********************************************************************************//

/// <reference types = "cypress" />

describe("ALERT", () => {
  // Repete essa linha em todos os "it" em todos os grupos
  before(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload(); 
  });
  
  // Array
  const comida = ["carne", "frango", "pizza", "vegetariano"] 

  it('Testar "Dinâmic"', () => {

    // carne, frango, pizza, vegetariano // Buscar através do Label
     cy.get("#formNome").type(this.usuario.nome); //Pegar o nome da Fixture
     cy.get("#formSobrenome").type(this.usuario.sobrenome);
     cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click();
     cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click();
     cy.get("#formEscolaridade").select(this.usuario.escolaridade);
     cy.get("#formEsportes").select(this.usuario.esportes);
     cy.get("#formCadastrar").click();
     cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado");
    
  });
});
