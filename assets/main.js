let pergunta = 0;
let escolha;
const titulo = document.getElementById('titulo');
const vermelho = document.getElementById('textovermelho');
const azul = document.getElementById('textoazul');

const buttons = document.querySelectorAll("#caixaprincipal button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clicou)
}


function clicou(){
    if(this.id == "botaovermelho"){
        redpath()
    }
    if(this.id == "botaoazul"){
        bluepath()
    }
}

function redpath(){
    pergunta = pergunta +1;
    console.log(pergunta)
    switch(pergunta){
        case 1:{
            escolha = 0;
            titulo.textContent = "Qual linguagem deseja aprender?"
            vermelho.textContent = "React"
            azul.textContent = "Vue"
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', clicou)
            }
            break;
        }
        case 2:{
            titulo.textContent = "Gostaria de se especializar em Front end ou se tornar Fullstack?"
            vermelho.textContent = "Front End"
            azul.textContent = "Full Stack"
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', clicou)
            }
            break;
        }
        case 3:{
            if(escolha == 0){
                titulo.textContent = "Ótimo então você deseja ser um desenvolvedor Front End, quais lingaguens gostaria de aprender?"
                document.querySelector('#caixabotao').classList.add('hide')
                document.querySelector('#fim').classList.remove('hide')
            }else if(escolha == 1){
                titulo.textContent = "Ótimo então você deseja ser um desenvolvedor Back End, quais lingaguens gostaria de aprender?"
                document.querySelector('#caixabotao').classList.add('hide')
                document.querySelector('#fim').classList.remove('hide')
            }
            partefinal();
            break;
        }
    }
}

function bluepath(){
    pergunta = pergunta + 1;
    switch(pergunta){
        case 1:{
            escolha = 1;
            titulo.textContent = "Qual linguagem deseja aprender?"
            vermelho.textContent = "C#"
            azul.textContent = "Java"
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', clicou)
            }
            break;
        }
        case 2:{
            titulo.textContent = "Gostaria de se especializar em Back end ou se tornar Fullstack?"
            vermelho.textContent = "Back End"
            azul.textContent = "Full Stack"
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', clicou)
            }
            break;
        }
        case 3:{
            titulo.textContent = "Ótimo então você gostaria de se tornar um desenvolvedor Full Stack, quais linguagens gostaria de aprender?";
            document.querySelector('#caixabotao').classList.add('hide');
            document.querySelector('#fim').classList.remove('hide');
            partefinal();
            break;
        }
    }
}

const input = document.querySelector('#fim');
const enviar = document.getElementById('pergunta')
const respostas = document.getElementById('respostas');
const submit = document.querySelector('#bsim');

function partefinal(){
    titulo.textContent = "Tem mais alguma tecnologia que você gostaria de aprender?"
    input.addEventListener('keydown', logKey)

    function logKey(e){
        if ( e.code == 'Enter' || e.code == 'NumpadEnter'){
            respostas.textContent += `${enviar.value} `;
            alert(`Linguagem ${enviar.value} foi adicionada!`);
            enviar.value = " ";
        }
    }

    submit.addEventListener('click', concluir);

    function concluir(){
        alert(`Sua ${respostas.textContent} !`)
    }
}
