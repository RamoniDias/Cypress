/// <reference types = "cypress" />

describe("Testar o pause", () => {
  before(() => {
    cy.visit(
      "http://127.0.0.1:5500/cypress/_Test_Automatizados/Proj_my/RamoniTestesAutomatizados.html"
    );
  });

  it("CENÁRIO DE TESTE 01: Pause com tempo", () => {
    cy.get("#formNome").should("have.value", "");
    cy.get("#formSobrenome")
      .should("have.value", "")
      .pause({ wait: 2000 })
      .click("{Next[N]:get}");

    cy.get(':nth-child(1) > :nth-child(6) > [type="text"]').should(
      "have.value",
      ""
    );
  });
});
