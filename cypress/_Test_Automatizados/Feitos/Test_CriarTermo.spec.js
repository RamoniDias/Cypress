
/// <reference types = "cypress" />

describe('TESTAR: Modulo Termo Contingencial/ Criar Termo', () => {
  // Repete essa linha em todos os "it" em todos os grupos
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  /*beforeEach(() => {
    cy.reload(); 
  });*/

  it.only('CENÁRIO DE TESTE 01: Informação da Loja', function() {
    
    //Logar
    cy.get('#ndamatrcula-1')
      .should('have.value', '', { delay: 100})
      .type('9999999', {delay: 50});
    

    cy.get('#senha-1')
      .should('have.value', '')
      .wait(150)
      .type('Trade@2020', { delay: 35 });

    cy.get('#button-35').click({ delay: 35 });
    
    //Módulo
    cy.get('#TermoContingencial').should("exist");
    cy.get('#TermoContingencial').click({ delay: 100 })
      
    cy.get('[label="label"] > .smart-card__wrapper').click();
    cy.get('#avancar').click();
    cy.get('.v-select__slot > #storeName').click()
      .select('LOJA SHOPPING MARABA -47667')
      .should('have.value', 'LOJA SHOPPING MARABA -47667');
  });

  it('CENÁRIO DE TESTE 02: Informações do Titular', function() {
  
    //Dados Pessoas Física 
    cy.get('#name').type("Tester QA");
    cy.get('#cpf').type("36809378812");
    cy.get('#identity').type("1111111111");
    cy.get('#shippingAgent').type("SSP");
    cy.get('[input-name="issueDate"]').type('17/03/2022') //Data Emissão
      .should('have.value', '17/03/2022');
    cy.get('[name="uf"]').click().select('SÃO PAULO')
      .should("have.value", 'SÃO PAULO');//UF 1
    cy.get('[input-name="issueDate"]').type('17/03/2000') //Data Nascimento
      .should('have.value', '17/03/2000');
    cy.get('#motherName').type("Nome mae");
    cy.get('[name="v-radio-214"][value="feminino"]')//Feminino
      .should('be.checked');
    cy.get('.v-select__slot > #nationality').select('brasileira') //Nacionalid
      .should('equal, brasileira');

    // Procuração
    cy.get('[name="v-radio-253"][value="false"]').should('be.checked');

    //Endereço e Contato  
    cy.get('#email').type("ramoni.dias@tradeupgroup.com");  //ENDERECO
    cy.get('#phone').type("111111111");
    cy.get('#zipCode').type("06435200");
    cy.get('#address').type("Rua de testes");   
    cy.get('#number').type("007"); 
    cy.get('#complement').type("Casa");
    cy.get('[name="state"]').click().select('SÃO PAULO')//UF
      .should("have.value", 'SÃO PAULO');
    cy.get('#neighborhood').type("Jardim Tupã");
    cy.get('[name="city"]').click().select('BARUERI') //Cidade
      .should('have.value', 'BARUERI');
    cy.get('[type="checkbox"]').check("false");
  });

  it('CENÁRIO DE TESTE 03: SMP', function() {
   
    //Plano Contratado / Fidelização
    cy.get('[name="plan_"]').click().select('TIM BLACK A 2.0 FATURA')
      .should('have.value', 'TIM BLACK A 2.0 FATURA');
    cy.get('[name="loyalty_"][value="true"]')//Fidelização = SIM
      .should('be.checked');
    cy.get('[name="planLoyalty_"][value="Plano"]')//PLANO
      .should('be.checked'); 

    //Continuação
    cy.get('#protocolNumber_').type("111");  
    cy.get('#phone_smp_').type("111111111");
    
    //Portabilidade
    cy.get('[name="v-radio-457"][value="false"]').should('be.checked');//Portabilidade
    cy.get('[name=v-radio-359][value="sim"]').should('be.checked');//1 
    cy.get('[name=v-radio-367][value="sim"]').should('be.checked');//2
    cy.get('[name="v-radio-375"][value="nao"]').should('be.checked');//3

    //Avançar
    cy.get('#btnNext').click().should("be.true");

  });
  
});