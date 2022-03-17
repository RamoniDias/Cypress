/// <reference types = "cypress" />

describe.only('Cypress basics', () => {
    it("Visitar um Site e Verificar o Tiítulo",() => {

      // Visitar uma determinada Pagina
      cy.visit("https://wcaquino.me/cypress/componentes.html")
        
      //Pegando o Título e já testando se é igual a algum nome 

      // cy.title().should("equal", "Campo de Treinamento");//should testar 
       // cy.title().should("contain", "Campo"); //Contém a palavra campo

      cy.pause();   

      //Fazer os dois testes de uma vez outro modo - Melhor
      cy.title()
         .should("equal", "Campo de Treinamento").debug()
         .should("contain", "Campo");
    })
    
    it('Encontrar e interagir com um elemento', () => {

      cy.visit("https://wcaquino.me/cypress/componentes.html");

        //cy.get('#buttonSimple').click();//1 passo, "Click" no botão
        //cy.get('#buttonSimple').should("have.value", "Obrigado!") //2 passo, teste o botão
        
        //Outra forma melhor de fazer, "ENCADEADO"

      cy.get('#buttonSimple')// 1° Pegar o Elemento 
          .click()             // 2° Fazer algo ou ação no Elemento interagir com elemento da tela   
          .should("have.value", "Obrigado!");// 3° Testar o Elemento       
    });
});

describe('Testar Login da TIM', () => {
  it('Encontrar site Tim e interagir com algum Elemento', () => {

    cy.visit("https://tim.com/");

    // Campo Matricula
    cy.get('#ndamatrcula-1')
      .should("have.value","" )
      .type("111111", { delay: 35 }); // Escrever neste Campo ou Elemento
    
    // Campo Senha
    cy.get('#senha')
      .should("have.value", "")
      .type("Ramoni@0007", { delay: 35 });

    // Selecionar Não sou um Robô
    cy.get('capition')
    //  .select() 
   //   .click()

    // Botão ENTRAR
    cy.get('#button')
      .click({ delay: 35 })
    
  });

});