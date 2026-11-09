# Conversor de Moedas

Uma interface web simples para conversão de moedas, feita com HTML, CSS e JavaScript puro. A página permite informar um valor e escolher entre dólar americano (USD), euro (EUR) e libra esterlina (GBP), com uma apresentação de resultado em reais.

> **Status:** o projeto ainda é um protótipo visual. A entrada do valor é formatada, mas a conversão e o envio do formulário ainda não estão implementados. O resultado exibido na página é apenas um exemplo estático.

## Funcionalidades atuais

- Interface para inserir um valor e selecionar USD, EUR ou GBP.
- Formatação da entrada para aceitar números e um separador decimal.
- Interface estilizada com CSS e imagens locais.

## Como executar

Não é necessário instalar dependências nem fazer build:

1. Baixe ou clone este repositório.
2. Abra `convert-template-main/index.html` no navegador.

## Estrutura do projeto

```text
.
├── README.md
└── convert-template-main/
    ├── index.html
    ├── scripts.js
    ├── styles.css
    └── img/
        ├── bg.png
        ├── check.svg
        ├── chevron-down.svg
        └── logo.svg
```

## Tecnologias

- HTML
- CSS
- JavaScript

## Próximos passos

- Implementar o cálculo de conversão e atualizar o resultado na tela.
- Definir como as taxas de câmbio serão obtidas e atualizadas.
- Validar os valores informados e tratar erros.
