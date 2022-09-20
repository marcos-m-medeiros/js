function contar() {
<<<<<<< HEAD
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            for (let c = 1; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {

        }
    }
}
=======
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let resultado = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `Impossível contar!`
        alert('[ERRO] Insira as informações corretamente')
    } else {
        resultado.innerHTML = `Contando: <br> `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
>>>>>>> 226101bccd64628e80dd4ae88a5896831b4c1fbb
