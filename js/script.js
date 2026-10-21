const participantes = []; //criando array de participantes
participantes.push("Luizito");
participantes.push("Flavito");
participantes.push("Curyzito");

console.log(participantes);
console.log(participantes.length);
participantes.pop();
console.log(participantes);
participantes[0] = "Caiadito";

// push adiciona no final e pop remove no final
// unshift adiciona no começo
participantes.unshift("Luizito");
console.log(participantes);
//shift remove no começo

//includes() verifica se um valor está incluso no vetor
console.log(participantes.includes("Renanzito"));
console.log(participantes);
console.log(participantes.indexOf("Flavito"));
// indexOf retorna a posição do valor informado.

for (let i = 0; i < participantes.length; i++){
    console.log(participantes[i]);
}

const formulario = document.getElementById("form-inscricao"); // variavel q recebe a informação do formulario

const mensagem = document.getElementById("mensagem"); //

const lista = document.getElementById("lista-participantes"); // armazena as informações da lista

const total = document.getElementById("total-participantes"); // manipulará o elemento q imprime total

formulario.addEventListener("submit", function(event){
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();

    if(nome === '' ){
        mensagem.innerText = "Informe um nome.";
        mensagem.style.color = 'red';
    }else {
    participantes.push(nome);
    mensagem.innerText = "Inscrição Realizada com Sucesso!"
    mensagem.style.color = "green";
    }
    
    mostrarParticipantes();
    
    formulario.reset();
    setTimeout(function(){
        mensagem.innerText = "";
    }, 10000) // 10 segundos;
})

function mostrarParticipantes(){
        lista.innerHTML = "";
        for (let i = 0; i < participantes.length; i++){
            const item = document.createElement("li"); // criando uma tag html, especificamente um elemento na lista.

            item.innerText = participantes[i];

            lista.appendChild(item);
        }
        total.innerText = participantes.length;

    }
