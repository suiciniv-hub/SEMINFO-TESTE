
/*
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
*/

/* const participantes = []; //criando array de participantes

const participante = {
    nome: "vinicius",
    email: "vinicius@gmail.com",
    curso: "SI"
}

participante.idade = 20; // ele cria uma nova propriedade chamada idade e ja adiciona o valor.
console.log(participante);

const participantes = [
    {
        nome: "Garbielito",
        email: "garbielito@garbielete",
        curso: "Apostas Exportivas"
    },
    {
        nome: "Dudulito",
        email: "dudulito@dudulete",
        curso: "Animez"
    },
    {
        nome: "Sonekita",
        email: "sonekita@sonekete",
        curso: "Jorgetinho"
    }
]

const novoParticipante = {
    nome: "Lulito",
    email: "lulija@janjita",
    curso: "Libera o sigilo Flavito"
}

participantes.push(novoParticipante);

for(let i = 0; i < participantes.length; i++){
    console.log(participantes[i].nome);
    console.log(participantes[i].curso);
}

participantes.forEach(function(participante){
    console.log(participante.nome);
    console.log(participante.email);
    console.log(participante.curso);
}); */

const participantes = [];

const formulario = document.getElementById("form-inscricao"); // variavel q recebe a informação do formulario

const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoCurso = document.getElementById("curso");

const mensagem = document.getElementById("mensagem"); //

const lista = document.getElementById("lista-participantes"); // armazena as informações da lista

const total = document.getElementById("total-participantes"); // manipulará o elemento q imprime total

formulario.addEventListener("submit", function(event){
    event.preventDefault(); 

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const curso = campoCurso.value;

    if(nome === '' || email === '' || curso === ''){
        mensagem.innerText = "Faltando informações.";
        mensagem.style.color = 'red';
    }else {
    mensagem.innerText = "Inscrição Realizada com Sucesso!"
    mensagem.style.color = "green";
    }
    
    const participante = {
        nome: nome,
        email: email,
        curso: curso
    };

    participantes.push(participante);

    formulario.reset();
    setTimeout(function(){
        mensagem.innerText = "";
    }, 8000) // 8 segundos;
})

function mostrarInscricao(){
    let inscricao = document.getElementById("inscricao");
    inscricao.style.display = 'block'

    let participantes = document.getElementById("participante");
    participantes.style.display = 'none';
}

function mostrarParticipantes(){
        lista.innerHTML = "";
        participantes.forEach(function(participante) {
            const item = document.createElement("li");
            item.innerText =
            participante.nome + " - " + 
            participante.email + " - " +
            participante.curso

            lista.appendChild(item);
        });

        total.innerText = participantes.length;

        let inscricao = document.getElementById("inscricao");
        inscricao.style.display = 'none'

        let participante = document.getElementById("participante");
        participante.style.display = 'block';
    }
