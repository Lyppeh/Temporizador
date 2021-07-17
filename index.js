// criando o evento de clicar
const botao = document.getElementById("botao");
botao.addEventListener("click", () => {


    //Tempo em segundos, que o usuario deseja
    let sec = document.getElementById("tempo").value

    // Pegando a div resposavel por retornar o temporizador
    const countDiv = document.getElementById("timer");

    //criando a função para contar
    const secpass = () => {

        let min = Math.floor(sec / 60);
        let segundosRestantes = sec % 60;

        if (segundosRestantes < 10) {
            segundosRestantes = "0" + segundosRestantes;
        }

        if (min < 10) {
            min = "0" + min;
        }

        // Inserindo o temporizador na div
        countDiv.innerHTML = min + ":" + segundosRestantes;

        if (sec > 0) {
            sec = sec - 1;

        }
        else {
            countDiv.innerHTML = "Acabou o tempo!";
        }
    };

    //fazendo o codigo ser executado a cada 1 segundo
    if (sec != "Acabou o tempo!") {
        const countDown = setInterval(() => secpass(), 1000);
    }
    else {
        clearInterval()
    }

})