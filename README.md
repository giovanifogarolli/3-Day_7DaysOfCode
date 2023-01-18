# 3-Day_7DaysOfCode
Exercicio do terceiro dia do #7DaysOfCode - Javascript

> Status do projeto: Finalizado

Resolução do dia 3 do 7DaysOfCode - Javascrypt pela Alura pelo aluno Giovani Fogarolli.

## Exercicio proposto

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

## Resolução

Por ser de livre customização, aproveitei para exercitar mais uma vez meus conhecimentos em HTML/CSS, escolhi fazer um jogo de escolha através de dois botões(Um azul e outro vermelho).
Passo a Passo:

1. Utilizando buttons e a tag de border-radius criei dois botões circulares, utilizando o Hover e o Active ~~e algumas pesquisas na internet~~, os botões, vermelho e azul, ficaram prontos para uso com animação e sombreamento.
2. Criado os botões criei duas divs para fazer a caixa, um Container para toda a interface do minijogo e uma caixa para estilizar ainda mais cada botão.
3. Na parte do Javascrypt, a maneira mais pratica diante do que foi passado e do meu conhecimento, foi criar algumas variaveis:
  - titulo, vermelho e azul -> Para mudar os textos referente a cada objeto
  - buttons -> Para receber o evento click
  - pergunta -> Para acompanhar a pergunta que foi parada no programa e dar procedimento a execução
  - input, enviar, respostas, e submit -> Para o funcionamento da resolução da questão 4
4. Utilizei um For para percorrer os dois botões atrás de um addEventListener('click') e executar a função que daria inicio ao código.

```js
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clicou)
}
```


5. A partir do momento em que o click ocorre, uma função com um condicionamento if verifica a id do botão clicado para saber qual caminho tomar (vermelho ou azul).
  - **PROBLEMA:** não daria para seguir apenas um caminho já que as respostas poderiam mudar entre vermelho e azul a qualquer momento.
  
```js

function clicou(){
    if(this.id == "botaovermelho"){
        redpath()
    }
    if(this.id == "botaoazul"){
        bluepath()
    }
}
```
6. Com o problema anterior em mente, optei por usar o switch(pergunta), e no fim de cada case o programa verificava qual botão seria clicado novamente, assim utilizando a variavel pergunta para manter acompanhamento da "fase" do jogo mais a verificação a todo momento de qual botão estava sendo selecionado, foi possivel fazer com que a troca de "cor" fosse possivel.
  - **pergunta** A cada fim de case se inicializava novamente o switch do botão selecionado, e a cada inicialização de switch era adicionado +1 a variavel pergunta para dar continuidade ao switch.

***Botão vermelho***

```js
function redpath(){ /// Botão vermelho
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
```

***Botão azul***

```js
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


```
7. Chegando no case 3 se inicia uma nova fase sem os botões (Questão 4), utilizando uma class hide{display: none}, nesta fase o usuario insere as linguagens de programação em uma label para ser adicionada no seu plano de estudo.
8. Utilizando o addEventListener('keydown'), é possivel que o usuario insira quantas linguagens preferir utilizando o Enter sem precisar clicar no botão de concluir.

```js
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

```


