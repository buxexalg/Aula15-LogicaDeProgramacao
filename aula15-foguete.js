const span = document.querySelector('span');
const imagem = document.querySelector('img');
const botoes = document.querySelector('.botoes');
const iniciarMissao = botoes.querySelector('.iniciar');
const abortarMissao = botoes.querySelector('.abortar');
let contagem = 10;

function botaoAbortarMissao () {
    if (iniciarMissao.hasAttribute('hidden')) {
        iniciarMissao.toggleAttribute("hidden");
    }
    span.innerText = 'Missão abortada! Boa sorte com o relatório.'
    imagem.setAttribute('src', 'alerta.gif');
}

function botaoIniciarMissao () {
    iniciarMissao.toggleAttribute("hidden");
    const id = setInterval(() => {
        span.innerText = `Faltam ${contagem} segundos!`;
        if(contagem === 0) {
            span.innerText = 'Lançamento iniciado!';
            imagem.setAttribute('src', 'fogueteGIF.gif');
            clearInterval(id);
        } 
        contagem--;
    }, 1000);
}

abortarMissao.addEventListener("mouseover", () => {
    abortarMissao.innerHTML = 'Avise ao seu superior antes de fazer isso';
})

abortarMissao.addEventListener("mouseout", () => {
    abortarMissao.innerHTML = 'Abortar missão';
})

abortarMissao.addEventListener("click", botaoAbortarMissao);

iniciarMissao.addEventListener("click", botaoIniciarMissao);



