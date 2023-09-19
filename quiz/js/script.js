let imgQuestao = document.querySelector('.imagemDaQuestao img');
let pergunta = document.querySelector('#pergunta');
let questaoAtual = 0; 
let questaoNumero = 0; 
let pontuacao = 0; 

// ALTERNATIVAS
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes');
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas');

// Questões
const q1 = {
    numQuestao: 1,
    imagem: '1.svg',
    pergunta: "Qual Constelação é Essa?",
    alternativaA: "Ursa Maior",
    alternativaB: "Andrômeda",
    alternativaC: "Ursa Menor",
    alternativaD: "Cachorrinho", 
    correta: "Andrômeda",
};
const q2 = {
    numQuestao: 2,
    imagem: '1.svg',
    pergunta: "Qual Constelação é Essa?",
    alternativaA: "Ursa Maior",
    alternativaB: "Órion",
    alternativaC: "Ursa Menor",
    alternativaD: "Cachorrinho",
    correta: "Ursa Maior",
};
const q3 = {
    numQuestao: 3,
    imagem: '2.svg',
    pergunta: "Qual Constelação é Essa?",
    alternativaA: "Ursa Maior",
    alternativaB: "Órion",
    alternativaC: "Ursa Menor",
    alternativaD: "Cachorrinho",
    correta: "Ursa Menor",
};
const q4 = {
    numQuestao: 4,
    imagem: '3.svg',
    pergunta: "Qual Constelação é Essa?",
    alternativaA: "Ursa Maior",
    alternativaB: "Órion",
    alternativaC: "Ursa Menor",
    alternativaD: "Cão Maior",
    correta: "Cão Maior",
};
const q5 = {
    numQuestao: 5,
    imagem: '4.svg',
    pergunta: "Qual Constelação é Essa?",
    alternativaA: "Ursa Maior",
    alternativaB: "Pégaso",
    alternativaC: "Ursa Menor",
    alternativaD: "Cão Maior",
    correta: "Pégaso",
};

// ARRAY DAS QUETÕES
const questoes = [q1, q2, q3, q4, q5];

let total = document.querySelector('#total');

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
imgQuestao.setAttribute('src', 'img/' + q1.imagem); // ADICIONE
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A');
b.setAttribute('value', '1B');
c.setAttribute('value', '1C');
d.setAttribute('value', '1D');

function bloquearAlternativas() {
    document.querySelector('#alternativas').classList.add('bloqueado');
}

function desbloquearAlternativas() {
    document.querySelector('#alternativas').classList.remove('bloqueado');
}

function mostrarQuestao(questaoNumero) {
    const questao = questoes[questaoNumero];
    imgQuestao.setAttribute('src', 'img/' + questao.imagem);
    pergunta.textContent = questao.pergunta;
    a.textContent = questao.alternativaA;
    b.textContent = questao.alternativaB;
    c.textContent = questao.alternativaC;
    d.textContent = questao.alternativaD;

    // Configurar o value das alternativas para a questão atual
    a.setAttribute('value', questao.numQuestao + 'A');
    b.setAttribute('value', questao.numQuestao + 'B');
    c.setAttribute('value', questao.numQuestao + 'C');
    d.setAttribute('value', questao.numQuestao + 'D');

    // Limpar qualquer seleção anterior
    a.classList.remove('selecionado');
    b.classList.remove('selecionado');
    c.classList.remove('selecionado');
    d.classList.remove('selecionado');

    // Atualizar a barra de progresso
    const progresso = ((questaoNumero + 1) / questoes.length) * 100;
    document.getElementById('progresso').value = progresso;

    desbloquearAlternativas();
}

function verificarSeAcertou(alternativa, elemento) {
    const questaoAtual = questoes[questaoNumero];
    const respostaSelecionada = alternativa.textContent;

    if (respostaSelecionada === questaoAtual.correta) {
        elemento.classList.add('correta');
        pontuacao++; // Aumenta a pontuação
    } else {
        elemento.classList.add('errado');

    }

    bloquearAlternativas();

    setTimeout(function () {
        questaoNumero++; // Avança para a próxima questão
        if (questaoNumero < questoes.length) {
            mostrarQuestao(questaoNumero);
        } else {
            mostrarResultados();
        }
    });
}

function mostrarResultados() {
    // Exibe a pontuação e o total de questões
    document.querySelector('#pontuacao').textContent = pontuacao;
    document.getElementById('totalQuestoes').textContent = questoes.length;

    // Exibe a seção de finalização
    document.getElementById('finalizacao').style.display = 'block';

    // Oculta a seção de questões
    document.querySelector('.tela-principal').style.display = 'none';
    document.querySelector('.iniciar').style.display = 'none';
}

function reiniciarQuiz() {
    // Reseta a pontuação e reinicia o quiz
    pontuacao = 0;
    questaoNumero = 0;
    mostrarQuestao(questaoNumero);

    document.getElementById('finalizacao').style.display = 'none';

    document.querySelector('.tela-principal').style.display = 'block';
}

