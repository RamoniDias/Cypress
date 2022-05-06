/// <reference types = "cypress" />

describe("Testar APi", () => {
  before(() => {
    cy.visit("http://127.0.0.1:5500/Proj_HTML/RamoniTestesAutomatizados.html");
  });

  it("CENÁRIO DE TESTE 01: Consultar CEP", () => {
    cy.request({
      method: "GET",
      url: "https://viacep.com.br/ws/01001000/json/",
    }).then((response) => {
      expect(response.status).to.equal(200);

      //Teste para um OBJETO
      expect(response.body.cep).to.equal("01001-000");

      //Teste para uma mensagem
      //expect(response.body).to.equal(
      // '{\n    "message": "CEP encontrado com Sucesso"\n}');

      //expect(response.body).to.contains("CEP encontrado com Sucesso");
    });
  });
});
