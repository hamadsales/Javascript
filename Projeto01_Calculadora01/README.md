# 🧮 Calculadora JS - Manipulação de DOM

Este projeto é uma calculadora funcional desenvolvida para aplicar conceitos de lógica de programação, manipulação de elementos HTML via JavaScript e estilização moderna com CSS.

## 🚀 Funcionalidades

- **Operações Básicas:** Soma, subtração, multiplicação e divisão.
- **Interface Centralizada:** Design limpo e focado na experiência do usuário.
- **Gerenciamento de Estado:** O sistema "lembra" qual operação foi selecionada enquanto o usuário digita o próximo número.
- **Tratamento de Erros:** Exibição de mensagem específica para operações impossíveis (como divisão por zero).

## 🧠 Como o Código Funciona (Lógica de Programação)

O projeto foi estruturado seguindo um fluxo lógico de **entrada, processamento e saída**:

1.  **Entrada:** O usuário clica nos botões numéricos, e o valor é adicionado ao campo de entrada (`enter`).
2.  **Estado da Operação:** Ao clicar em um operador (+, -, ×, ÷), o programa guarda essa escolha em uma variável global chamada `operacaoAtual`. Se o visor principal estiver zerado, o valor digitado "sobe" para o visor principal (`screen`).
3.  **Processamento:** O botão de **Igual (=)** funciona como um gatilho. Ele verifica qual operação está guardada na "memória" do programa e executa a função correspondente.
4.  **Saída:** O resultado final é exibido no visor principal (`screen`), e o campo de entrada é limpo para a próxima conta.

## 🎨 Design e Layout

Para a parte visual, utilizei **CSS Flexbox** para garantir que a calculadora ficasse perfeitamente centralizada na tela, independente do tamanho do navegador. Adicionei efeitos de `hover` e `transition` nos botões para criar uma interface interativa e agradável.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação da calculadora.
*   **CSS3:** Estilização, Flexbox e animações suaves.
*   **JavaScript (ES6):** Lógica das operações e interação com o DOM.

---

### 💻 Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

---
Desenvolvido por **Hamad Sales** como parte dos meus estudos de Desenvolvimento Web.