const numerosalvo = localStorage.getItem("numero");
let numero = 0;

if (numerosalvo) {
    // Remove os pontos e converte pra número
    numero = parseInt(numerosalvo);
}

function add(value) {
    numero += value;
    render();
}

function render() {
    const p = document.querySelector("#resultado");
    p.innerText = numero.toLocaleString("pt-BR");

    // Remove qualquer classe anterior
    p.classList.remove("positivo", "negativo", "neutro");

    // Adiciona a nova classe dependendo do valor
    if (numero > 0) {
        p.classList.add("positivo");
    } else if (numero < 0) {
        p.classList.add("negativo");
    } else {
        p.classList.add("neutro");
    }

    localStorage.setItem("numero", numero);
}

function Reset() {
    numero = 0;
    render();
}

render();