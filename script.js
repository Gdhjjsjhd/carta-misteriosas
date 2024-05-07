const estilos = ['newspaper', 'magazine1', 'magazine2', 'style1', 'style2', 'style3', 'style4', 'style5', 'style6', 'style7', 'style8']

const tamanhos = ['medium', 'big', 'reaallybig']

const rotacoes = ['rotateleft', 'rotateright']

const inclinacoes = ['skewleft', 'skewright']

const cores = [ 'red', 'blue', 'orange', 'green', 'purple', 'yellow', 'pink']

function gerarCarta(){
    const p = document.getElementById('carta-gerada');
    p.innerHTML='';

    const texto = document.getElementById('carta-texto').value.trim();

    if(!texto){
        p.textContent = 'Por favor, digite o conteúdo da carta! 🐒'
        return;
    }

    const letras = texto.split('')
    const contador = document.getElementById('carta-contador');

    contador.textContent = letras.length;

    letras.forEach((letra) => {

        const span = document.createElement('span');
        span.textContent = letra;
        span.classList.add(
            gerarClasseAleatoria(estilos),
            gerarClasseAleatoria(tamanhos),
            gerarClasseAleatoria(rotacoes),
            gerarClasseAleatoria(inclinacoes),
            gerarClasseAleatoria(cores)
        );


        span.addEventListener('click' , (event) => {
            const spanClicado  = event.target;
            const classesAtuais = spanClicado.classList
            const proximoEstilo = gerarClasseAleatoria(estilos)


            classesAtuais.remove(...estilos);
            classesAtuais.add(proximoEstilo)

    


        })
        
        p.appendChild(span)
    });

}



    const botao = document.getElementById('criar-carta');
    botao.addEventListener('click', gerarCarta);

    function  gerarClasseAleatoria(opcoes){
        return opcoes [Math.floor(Math.random() * opcoes.length)]
    }

