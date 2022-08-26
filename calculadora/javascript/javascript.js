function somar() {
    var n1 = window.document.getElementById('n1soma');
    var n2 = window.document.getElementById('n2soma');
    res = window.document.getElementById('resultado');

    var n1 = Number(n1.value);
    var n2 = Number(n2.value);
    var soma = n1 + n2;

    res.innerText = `Resultado da Soma: ${soma}`;
}

function subtrair() {
    var n1 = window.document.getElementById('n1sub');
    var n2 = window.document.getElementById('n2sub');
    res = window.document.getElementById('resultado');


    var n1 = Number(n1.value);
    var n2 = Number(n2.value);
    var sub = n1 - n2;

    res.innerHTML = `Resultado da Subtração: ${sub}`
}

function multiplicar() {
    var n1 = window.document.getElementById('n1mult');
    var n2 = window.document.getElementById('n2mult');
    res = window.document.getElementById('resultado');

    var n1 = Number(n1.value);
    var n2 = Number(n2.value);

    var mult = n1 * n2;

    res.innerText = `Resultado da Multiplicação: ${mult}`;
}

function dividir() {
    var n1 = window.document.getElementById('n1div');
    var n2 = window.document.getElementById('n2div');
    res = window.document.getElementById('resultado');

    n1 = Number(n1div.value);
    n2 = Number(n2div.value);

    var div = n1 / n2;

    res.innerText = `Resultado da Divisão: ${div}`;
}
