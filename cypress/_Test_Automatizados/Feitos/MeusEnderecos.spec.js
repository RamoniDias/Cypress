
/// <reference types = "cypress" />

describe("Testar: Modulo KM/Meus Enderecos", () => {
  // Repete essa linha em todos os "it" em todos os grupos
  before(() => {
    cy.visit("https://tester1.timsmart.com.br/");
  });

  beforeEach(() => {
    cy.reload(); // carrega pagina de novo
  });

  it("Validar: Filtro de Pesquisa", function () {
    cy.get("#ndamatrcula-1").type("9999999");
    cy.get("#senha-1").type("Trade@2020");
    cy.get("#button-35").click();
    cy.get("#KM").click();
    cy.get("#MyAddress > .smart-card__wrapper").click();
    cy.get('[aria-label="Pesquisar..."]').type("Barueri")
    cy.get(".v-input__icon > .v-icon").click();
    cy.get(".relative > .smart-input").should("contain.value","Barueri");


  });
  it.only("Validar: Botão Novo Endereco", function () {
    cy.get("#ndamatrcula-1").type("9999999");
    cy.get("#senha-1").type("Trade@2020");
    cy.get("#button-35").click();
    cy.get("#KM").click();
    cy.get("#MyAddress > .smart-card__wrapper").click();
  });



}); 