[![CircleCI](https://circleci.com/gh/tradeupgroup/tim_gunts/tree/main.svg?style=svg&circle-token=59f0ec1083c937c6c75a43cf24cfe37d35acc877)](https://circleci.com/gh/tradeupgroup/tim_gunts/tree/main)

<br><br>

# CYPRESS
```
Framework para realizar testes automatizados Front-End, Back-End e end-to-end usando JavaScrip.
```
### Dados Técnicos
```
Node.js: 10.12.0
VS Code: 1.61
Cypress: 8.6.0
```
### Configuração - Instalação
```
Download Node.js:
https://nodejs.org/pt-br/download/

Download VS code:
https://code.visualstudio.com/
```

### Criar Projeto Via Terminal
```
Criar pasta do projeto: mkdir Tim_Gunts

node modules/criar.pasta.do.Projeto

Ex: cd node modules/Tim_Gunts
```

### Criar Informações do Projeto no VS code (package.json)
```
npm init     =  Preencher - manual
npm init -y  =  Preencher - Automatico - Padrão - Mais usado
```
### Instalar Cypress
```
npm install cypress           :  Baixa versão mais recente
Ex: node modules/pasta.Projeto: npm install cypress
```
### Iniciar Cypress
```
node_modules/.bin/cypress open 
Ex: node modules/pasta.Projeto: node_modules/.bin/cypress open

* Para Windows precisa de uma nova configuração, mas serve para Linux e Aplle e é uma    opção melhor para abrir o cypress:
-Abrir o arquivo [packge.json] no VS Code
-Em "script", após terminar a linha colocar um "," vírgula e colocar mais um script:
"cypress": "cypress open"
-Salvar o arquivo e fecha-lo, ficará assim:
```
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress": "cypress open"
  }
```  
```
* Abrir o terminal na pasta do projeto e digitar: 
* Ex: node modules/pasta.Projeto: npm run cypress

* Abrirá uma nova janela do "Cypress" contendo todos os testes.
* Os testes estão alocados na pasta [INTEGRATION]
* Após clicar em algum teste, abrirá uma nova página na Web com a framework do cypress, e o teste será executado     automaticamente.

OBS: Abrir o VS code antes de executar algum teste.
```
### Iniciar VS Code
```
Ex: node modules/pasta.Projeto: code .
```
### Arquivos Cypress
```
* fixtures: Outros

* integration: Excluir todos os arquivos "Exemplos" ou pasta, criar novo arquivo para testes.
O nome para arquivo de teste sempre colocar  "spec.js" com formato de java script:
Ex: [teste.spec.js] 

-Nesta pasta será onde ficará alocado todos os seus arquivos de teste, e após salvar algum teste, ele será executado automaticamente na framework do cypress na web.

* plugin: Outros

* screenshots: Onde fica armazenado os Prints
```
### Dependências Cypress
```
 Pasta [node_modules] 
```
### Gravar ou Gerar Videos
```
* Criar pasta [videos] para alocar videos dos testes, dentro da pasta [cypress]

* Baixar extensão no VS code para visualizar video no formato "MP4": MPEG-4 Preview

* Arquivo: [cypress.json]: aloca todas as configuração do cypress, inserir os seguintes parâmetros em formato [Json]:
```
renomear arquivo cypress-example.json para cypress.json
```
{
    "$schema": "https://on.cypress.io/cypress.schema.json",
    "screenshotOnRunFailure": true,
    "screenshotsFolder": "cypress/screenshots",
    "video": true,
    "videosFolder": "cypress/videos",
    "videoCompression": 32,
    "chromeWebSecurity": true,
    "experimentalStudio": true,
    "baseUrl": "http://localhost:8080",
    "downloadsFolder": "cypress/downloads",
    "integrationFolder" : "cypress/integration",
    "defaultCommandTimeout":20000    
}
```
```
OBS: Após fazer essa configuração e criar os testes, gere os videos.

* Gerar o video, abra o Terminal e digite: 

npx cypress  run --spec + espaço + clicar com botão direito em cima do arquivo de teste e escolher a opção "copiar o caminho" e colar no terminal tudo.
```
```
Ex: usuário~ /node/nome do Projeto: Comando /caminho do arquivo

ramonidias@007~ /node_modules/Tim_Gunts: npx cypress  run --spec /home/ramonidias/node_modules/curso-cypress/cypress/integration/TimSmart_Metas/card_001.spec.js
```

### Observação

[Canal do YouTube para tirar dúvidas sobre cypress](https://www.youtube.com/channel/UCI_m5uwJjfD7trqcwAB8E3w)

[Documentation cypress oficial](https://docs.cypress.io/guides/core-concepts/cypress-studio#Extending-a-Test)

[Autor : Ramoni Dias QA]()