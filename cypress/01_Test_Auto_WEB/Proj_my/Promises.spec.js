it("Sem Testes ainda, Promise", () => { });

//---------------------------------------------------------
//Exemplo: 1

//const getSomething = () => 10;

//const system = () => {
//    console.log("Início");
//    const something = getSomething();
//    console.log("Something is " + something);
//    console.log("Fim !!!");
//}

//system();

//----------------------------------------------------------
//Exemplo: 2

// Função que demora 1000 segundos para ser executada

//const getSomething = (callback) => {
//    setTimeout(() => {
//        callback (12);
//    }, 1000)   
//}

// Função que chama a função a cima e da a resposta
// só após o processamento de 1000 segundos.

//const system = () => {
//    console.log("Início");
//    getSomething(some =>{
//        console.log("Something is " + some);
//       console.log("Fim !!!");
//   });  
//}
//system();
//----------------------------------------------------------
//Exemplo: 3

const getSomething = () => {
   return new Promise((resolve, reject) => {
       setTimeout(() =>{
       resolve(12);
    }, 1000)   
})
}

const system = () => {
    console.log("Início");
    const prom = getSomething();
    prom.then(some =>{
        console.log("Something is " + some);
        console.log("Fim !!!");
   });  
}

system();





