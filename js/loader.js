document.addEventListener('DOMContentLoaded', function() {
    function mostrarCarregamento() {
        document.querySelector('#planet').style.display = 'flex';
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
        document.querySelector('main').style.display = 'none';

        setTimeout(function() {
            document.querySelector('header').style.display = 'block';
            document.querySelector('footer').style.display = 'block';
            document.querySelector('main').style.display = 'block';
            document.querySelector('#planet').style.display = 'none';
        }, 3000);
    }

    mostrarCarregamento();
});

