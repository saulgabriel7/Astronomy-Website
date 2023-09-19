document.querySelector('#planet').style.display = 'none';
document.querySelector('#finalizacao').style.display = 'none';

function iniciarQuiz() {
    document.querySelector('.iniciar').style.display = 'none';
    document.querySelector('#planet').style.display = 'flex';

    setTimeout(function() {
        document.querySelector('.tela-principal').style.display = 'flex';
        document.querySelector('#planet').style.display = 'none'
    }, 3000);
}
