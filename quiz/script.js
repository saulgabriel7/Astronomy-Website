document.querySelector("#quiz").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter respostas selecionadas
    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');
    var q4 = document.querySelector('input[name="q4"]:checked');
    var q5 = document.querySelector('input[name="q5"]:checked');

    // Verificar respostas e exibir resultado
    var score = 0;
    var result = document.querySelector(".resultado");
    result.innerHTML = "";

    if (q1 && q1.value === "b") {
      score++;
    }
    if (q2 && q2.value === "a") {
      score++;
    }
    if (q3 && q3.value === "c") {
      score++;
    }
    if (q4 && q4.value === "d") {
      score++;
    }
    if (q5 && q5.value === "b") {
      score++;
    }

    result.innerHTML = "Você acertou " + score + " de 5 perguntas.";
  });