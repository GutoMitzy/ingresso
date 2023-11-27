function comprar() {
    //orientar tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    //dar função ao botao
    if(tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } 

    if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    }
    
    if (tipoIngresso == 'inferior') {
        comprarInferior(quantidade);
    }

    //reduzir do limite
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qtdPista) {
        alert('Número indisponível de ingressos.');
    } else {
        alert('Compra aprovada!');
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qtdSuperior) {
        alert('Número indisponível de ingressos.');
    } else {
        alert('Compra aprovada!');
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = document.getElementById('qtd-inferior').textContent;
    if(quantidade > qtdInferior) {
        alert('Número indisponível de ingressos.');
    } else {
        alert('Compra aprovada!');
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
}
