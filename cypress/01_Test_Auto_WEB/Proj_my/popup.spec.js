
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
  it("Validar se Popup foi invocado", () => {
    //usar sutub para isso usa-se o widows e a promisse e a função win, com metodo open
    cy.window().then(win => {
        cy.stub(win, open).as("WinOpen")//as = dando nome ao metodo open

    })

    cy.get("#buttonPopup").click()
    cy.get("WinOpen").should("be.called")// Verificar se o popup foi chamado

    //o Teste é só par ver se o poput foi chamado ou, unico teste a fazer
    })

    
});


  
