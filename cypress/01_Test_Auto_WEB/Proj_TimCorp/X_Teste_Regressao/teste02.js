
/// <reference types = "cypress" />

//const { contains } = require("cypress/types/jquery");
//const { isEqual }  = require("cypress/types/lodash");

describe('1641_Erro-ao-excluir-rotas', () => {

    before(() => { 
        cy.visit("http://10.26.2.60:8082/")
    });

    beforeEach(() => { 
        cy.reload()
    });

    it('Cenário de Teste 01: Validar se botão de exclusão ficar apto e excluir, somente para uma joranda Manual e não Emitida', function() {

        //Login
        cy.get('#registration-input').clear();
        cy.get('#registration-input').type('8040111', { delay : 200 } );
        cy.get('#password-input').clear();
        cy.get('#password-input').type('Trade@2020',  { delay : 200 });
        cy.get('#entrar-btn',).click({delay : 200});

        //Tela NOVO SMART
        cy.get('#KM > .smart-icon').click();

        //Tela KM
        cy.get('#Journey > .smart--text-wrapper > .smart__title').click();  
     
        // Tela Jornada
        // Card Jornada 

        function cardJornada() {  

         for (const i = 1; 1 < 11; i++) {
                                                        
             const labelManual      = [cy.get(":nth-child("+[i]+") > .status__wrapper > .align-center > .manual")]
             const labelNotEmmited  = [cy.get(":nth-child("+[i]+") > .status__wrapper > .align-center > .not--emmited")]
            
           
             if (labelManual[i]     == [":nth-child("+[i]+") > .status__wrapper > .align-center > .manual"]) and
              
             if (labelNotEmmited[i] == [":nth-child("+[i]+") > .status__wrapper > .align-center > .not--emmited"])
                                                                        
             {
                cy.get('#button-20').click()   // Botão Detalhe
                cy.get('#button-33').click()   // Botão Excluir

                cy.pause()

                cy.get('#button-39').click()   // Botão Confirmar exclusão de Rota
 
                return print("Jornada Excluída")
                
             } 
             else{
                
                return print("Jornadas Não entram na Condição")
                
                  }
           }     
        }

        cy.wrap(cardJornada())
        cy.window("Processado") 



    });

});    