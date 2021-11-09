/// <reference types = "cypress" />

describe('Testar: Pegar Título', () => {
    before(() => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")
   });

   beforeEach(() => {
     cy.reload() 
   });

   it('Cenário de Teste: 01', () => {
       //Pegar valor do título e jogar em outro lugar

      let  recebeTitle

      cy.title().then(title =>{
        console.log(title)

        cy.get('#formNome').type(title)// Pega valor do titlo e joga no campo NOME

        recebeTitle = title // Recebendo valor do TÍTULO em uma variavel para colocar em outro lugar ou campo
      })

      cy.get('[data-cy=dataSobrenome]').then($el =>{

          $el.val(recebeTitle) //or
          
          cy.wrap($el).type(recebeTitle)

      })



       
   });

});
