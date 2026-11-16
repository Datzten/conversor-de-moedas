# Conversor de Moedas

Aplicação web para converter valores de dólares americanos (USD), euros (EUR) e libras esterlinas (GBP) para reais (BRL). A interface é feita com HTML, CSS e JavaScript, sem dependências ou etapa de build.

## Demonstração

![Conversor em funcionamento: US$ 100 convertidos para R$ 535,00](convert-template-main/img/conversor-em-funcionamento.png)

## Funcionalidades

- Conversão de USD, EUR e GBP para BRL.
- Entrada de valores com vírgula ou ponto como separador decimal.
- Exibição da taxa utilizada e do total em reais, formatados para o padrão brasileiro.
- Resultado exibido na interface após cada conversão.

### Taxas utilizadas

As taxas estão definidas diretamente em `convert-template-main/scripts.js`:

| Moeda | Taxa usada |
| --- | ---: |
| USD | R$ 5,35 |
| EUR | R$ 6,40 |
| GBP | R$ 7,80 |

Esses valores são fixos e servem para demonstração; não são atualizados automaticamente nem consultados em uma API.

## Como executar

Não é necessário instalar nada. Abra `convert-template-main/index.html` em um navegador, informe um valor, escolha a moeda e clique em **Converter em reais**.

## Tecnologias

- HTML
- CSS
- JavaScript

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
        ├── conversor-em-funcionamento.png
        └── logo.svg
```
