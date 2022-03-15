
/// <reference types = "cypress" />

describe('ALERT', () => {
    
    // Repete essa linha em todos os "it" em todos os grupos
    before(() => { 
      cy.visit("https://www.wcaquino.me/cypress/componentes.html")
    });

    beforeEach(() => { 
      cy.reload() // carrega pagina de novo
    });

    it('Testar "ALERT"', () => {
      //Ex:1
      cy.get('#alert').click() 
      
      //Validar evento do alert, pegar message's
      cy.on("window:alert", msg => {
        console.log(msg)
        expect(msg).to.be.equal("Alert Simples")
      })   
    });

    it('Testar "ALERT COM MOCK"', () => {
      //Ex:2 
      // Cria variavel que recebe a funçao Mock
      // renomeada para ALERTS  
      const stub = cy.stub().as("alerta") 

      cy.on("window:alert", stub)

      // Testar com Then é uma promisse
      cy.get("#alert").click().then(() =>{

      // esperada uma chamada na posição 0  
        
      expect(stub.getCall(0)).to.be.calledWith("Alert Simples")

      }) 
    });

    it('Testar "MODAL CANCELAR OU OK"', () => { 

       //Fazer CLICK, depois Validar Eventos (confirm) e (alert): Validar Mensagens 
      cy.get('#confirm').click()  

       //Validar Evento (confirm)
      cy.on("window:confirm", msg => {
          console.log(msg)
          expect(msg).to.be.equal("Confirm Simples")
       })  
       //Validar Evento (alert)
      cy.on("window:alert", msg => {
          console.log(msg)
          expect(msg).to.be.equal("Confirmado")
       })         
        
    });
   
    it('Testar: MODAL OPÇÃO NEGADO', () => {

      //Validar CLICK "Cancelar
      cy.on("window:confirm", msg => {
          expect(msg).to.be.equal("Confirm Simples")
          return false
      })  
      //usar o expect tem q ser desse jeito  
      cy.on("window:alert", msg => {
          expect(msg).to.be.equal("Negado")
      })   
      
      cy.get("#confirm").click()
        
    });

     it.only('Testar "PROMPT"', () => {
       
       //Promisses
       cy.window().then(win => {
        cy.stub(win , "prompt").returns("007") //Mook de test + retorne na aplicação com este valor     
       })

       cy.on("window:confirm", msg => {
         expect(msg).to.be.equal("Era 007")
        })
       
       cy.on("window:alert", msg => {
         expect(msg).to.be.equal(":D")
        })
        
       cy.get("#prompt").click();

     });

});