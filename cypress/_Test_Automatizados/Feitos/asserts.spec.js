/// <reference types = "cypress" />
// Asserts para testes e validações de comparação

it('Cenário de Teste 01: Equal = Igual', () => {
    const a = 1; // Variavel é igual a 1 ou String
    const b = "Teste";

    expect(a).equal(1); // Pode comprar com String
    expect(a, " Deveria ser 1").equal(1);
    expect(b).equal("Teste");// Com mensagem de erro
    expect(a).not.equal(2); // Não é igual    
});

it('Cenário de Teste 02: True = Verdadeiro', () => {
    const a = true;
    const b = false;
    const c = null;
    let d;

    expect(a).true;
    expect(a).not.null;
    expect(b).false;
    expect(c).null;
    expect(d).undefined      
});

it('Cenário de Teste 03: Objct = Objetos', () => {
    const obj = {  // Estrutura de Objeto, 
        a: 1,      // Propriedade e Valor
        b: 2       //           a : 1
    }

    expect(obj).equal(obj);// Varias formas de fazer
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);
    expect(obj).deep.equal({a: 1, b: 2});
    expect(obj).include({a: 1})// Verif se o objeto contém essa Propriedade e valor
    expect(obj).have.property('b', 2);// Verifica se contém a Propriedade b
    expect(obj).not.empty; // Verifica se objeto esta VAZIO
});

it('Cenário de Teste 04: Arrays = Vetor', () => {
    const arr = [1, 2, 3]

    expect(arr).have.members([1, 2, 3]); // Verif se Tem esses membros ou esses valores
    expect(arr).include.members([1, 3]); // Verif se Tem membros aleatórios
    expect(arr).not.empty; // Verifica se o array não esta VAZIO
    expect([]).empty // um array vazion esta vazio
});

it('Cenário de Teste 05: Types = Tipos', () => {
    const num = 1
    const str = "String"

    expect(num).a('number');
    expect(str).a('String');
    expect({}).an('object');
    expect([]).an('array');    
});

it('Cenário de Teste 06: String = Letras', () => {
    const str = "String de Teste"

    expect(str).equal("String de Teste");// Verifica valor das Strings
    expect(str).have.length(15); //Verifica se a String tem 15 Bytes
    expect(str).contain('de'); //Verifica se CONTÉM  o valor "de" na String
    expect(str).match(/de/); // Verifica se Contém o de na String também
    expect(str).match(/^String/); // Verif se o valor COMEÇA com essa palavra
    expect(str).match(/Teste$/); // Verif se o valor TERMINA com essa palavra
    expect(str).match(/.{15}/)// Verif se aceita qualquer caracteres com 15 byes
    expect(str).match(/\w+/); // Verif se a String contém apenas LETRAS
    expect(str).match(/\D/);// Verif se não contém NÚMEROS
});    

it('Cenário de Teste 07: Numbers = Número', () => {
    const number = 4
    const floatnumber = 5.2123

    expect(number).equal(4);
    expect(number).above(3);// Verif se o valor esta ACIMA de 3
    expect(number).below(7);// Verif se o valor esta ABAIXO de 7
    expect(floatnumber).equal(5.2123);
    expect(floatnumber).closeTo(5.2, 0.1);// Verif o número APROXIMADO
    expect(floatnumber).above(5);// Verif se é ACIMA de 5 o Float    
});