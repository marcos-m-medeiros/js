function calcular(){
    var txtv = window.document.getElementById('txtvel');
    var res = window.document.getElementById('resultado');
    var vel = Number(txtv.value);
    resultado.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;
    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}