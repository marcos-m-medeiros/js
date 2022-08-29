function nacionalidade() {
    var ns = window.document.getElementById('nac');
    var res = window.document.getElementById('res');

    var nsc = (ns.value);

    if(nsc == 'Brasileiro' || nsc == 'brasileiro' || nsc == 'Brasileira' || nsc == 'brasileira') {
        res.innerHTML = `Você é Brasileiro(a).`
    } else {
        res.innerHTML = `Você é estrangeiro.`
    }
}