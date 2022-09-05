function contar() {
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('fim');
    var passo = window.document.getElementById('passo');
    var contagem = window.document.getElementById('contagem');

    var inicio = Number(inicio.value);
    var fim = Number(fim.value);
    var passo = Number(passo.value);

    while (inicio <= fim) {
        contagem.innerHTML = `<br>Contando: <br>${inicio}`
        inicio = inicio + passo;
    }
}

