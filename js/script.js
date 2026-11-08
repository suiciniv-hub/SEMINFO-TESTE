
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
const campoIdade = document.getElementById("idade");
const campoMatricula = document.getElementById("matricula");

const mensagem = document.getElementById("mensagem"); //


const total = document.getElementById("total-participantes"); // manipulará o elemento q imprime total
const tabelaParticipantes = document.getElementById("corpo-tabela");

formulario.addEventListener("submit", function(event){
    event.preventDefault(); 

    const nome = campoNome.value.trim();
    const idade = Number(campoIdade.value);
    const matricula = campoMatricula.value.trim();
    const email = campoEmail.value.trim();
    const curso = campoCurso.value;


    if(nome === '' || email === ''|| curso === '' || !Number.isInteger(idade) || idade < 1 || idade > 120  || matricula === ""){
        mensagem.innerText = "Faltando informações.";
        mensagem.style.color = 'red';
        return;
    }

    console.log(verificarMatricula(matricula));

    if(verificarMatricula(matricula)){
        mensagem.innerText = "Essa matrícula já foi cadastrada";
        mensagem.style.color = 'red';
    }

    const participante = {
        nome: nome,
        idade: idade,
        matricula: matricula,
        email: email,
        curso: curso
    };

    participantes.push(participante);

    mensagem.innerText = "Inscrição Realizada com Sucesso!"
    mensagem.style.color = "green";
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
    tabelaParticipantes.innerHTML = "";
        participantes.forEach(function(participante) {
            
            const linha = document.createElement("tr");
            const dados = [
            participante.nome,
            participante.idade,
            participante.matricula,
            participante.email,
            participante.curso
            ];

            dados.forEach(function(dado){
                const coluna = document.createElement('td');
                coluna.innerText = dado;
                linha.appendChild(coluna);
            })

            tabelaParticipantes.appendChild(linha);
        });

        total.innerText = participantes.length;

        let inscricao = document.getElementById("inscricao");
        inscricao.style.display = 'none'

        let participante = document.getElementById("participante");
        participante.style.display = 'block';
    }

function verificarMatricula(matricula){

     return false;
}