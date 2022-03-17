/// <reference types = "cypress" />

describe('HELPERS', () => {
  //  before(() => {
  //      cy.visit("https://www.wcaquino.me/cypress/componentes.html")
  // });

  // beforeEach(() => {
  //   cy.reload() 
  // });

  it('Teste WRAP : Métodos', () => {
      
   // const obj = { nome:"User", idade:20 }

   // expect(obj).to.have.property("nome")
  // expect(obj).to.have.property("idade")
    // sem o wrap não é possível utilizar o SHOULD
  //  cy.wrap(obj).should( "have.a.property",  "nome")

    // Testando por Promises - usa-se o Then e o $ele nome da função
    //cy.get('#formNome').then($ele => {       
   //cy.wrap($ele).type("Funciona via cypress")

    //const promise = new Promise((resolve, reject) => {
      
     //setTimeout(() => { // cria sozinho a estrutura setTimeout
    //   resolve(10)      // temos q colocar
    // }, 500)           // só alterar o valor do tempo

   // });

    //cy.get("#buttonSimple").then(() => console.log("Encontrei"))
    //cy.wrap(promise).then(ret => console.log(ret))
   // cy.get("#buttonList").then(() => console.log("Encontrei 2"))

   // cy.wrap(1).then(num => {
   //    return 2
   // }).should("be.equal",2)
 
  });

  it('Its', () => {
    const obj = { nome: "User", idade: 20}
    
    // Its pega uma propriedade do Objeto e pode compara-lo com outro
    cy.wrap(obj).its("nome").should("be.equal", "User") 
    
  });
  

  //Testar Funções - Pega-las e testa-las

  it('Testar: Invoke 1', () => {
    //Ex:1 Pegar uma função e testala
    const getValue = () => 1;
    
    // Peguei a Função com Wrap, invokei a função e testei o 
    // valor da função se era igual a 1
    cy.wrap({fn: getValue}).invoke("fn").should("be.equal", 1)
  });

  it.only('Testar: Invoke 2', () => {
    //Ex:2 
    const soma = (a,b) => a + b;
    
    cy.wrap({fn: soma}).invoke("fn",2,5).should("be.equal", 7)

    cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    //Função Val passa texto
    cy.get("#formNome").invoke("val", "Texto via invoke")
    cy.window().invoke("alert", "Dá pra ver ?")// mandar um alerta
    cy.window("APROVADO !!! ") 

    //usar um elemento do        HTML    /         Tipo      /       Valor
    cy.get("#resultado").invoke("html", '<input type="button", value="hacheado"/>')




  });

});