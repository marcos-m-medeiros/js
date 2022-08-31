var nome = window.prompt('Qual é o seu nome?');
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Seu nome em maiúculas é <strong>${nome.toUpperCase()}</strong><br>`);
document.write(`Seu nome em minúsculas é <strong>${nome.toLowerCase()}</strong>`);