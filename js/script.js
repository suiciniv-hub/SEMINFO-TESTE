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

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const idade = Number(campoIdade.value);
    const matricula = campoMatricula.value.trim();
    const email = campoEmail.value.trim();
    const curso = campoCurso.value;

    const modalidadeSelecionada =
        document.querySelector('input[name="modalidade"]:checked');
    const turnoSelecionado =
        document.querySelector('input[name="turno"]:checked');

    const modalidade = modalidadeSelecionada?.value || "";
    const turno = turnoSelecionado?.value || "";

    const minicurso = document.getElementById("minicurso").value;

    const caixasMarcadas =
        document.querySelectorAll('input[name="evento"]:checked');

    const eventos = [];
    caixasMarcadas.forEach(function (caixa) {
        eventos.push(caixa.value);
    });

    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Matrícula:", matricula);
    console.log("Email:", email);
    console.log("Curso:", curso);
    console.log("Modalidade:", modalidade);
    console.log("Minicurso:", minicurso);
    console.log("Turno:", turno);
    console.log("Eventos:", eventos);

    // Validando campos
    if (nome === '' || email === '' || curso === '' || !Number.isInteger(idade) || idade < 1 || idade > 120 || matricula === "" || modalidade === "" || minicurso === "" || turno === "") {
        mensagem.innerText = "Faltando informações.";
        mensagem.style.color = 'red';
        return;
    }

    const duplicado = participantes.some(function(p){
        return p.matricula === matricula || p.email === email;
    })
    if(duplicado){
        mensagem.innerText = "A Matrícula ou o Email já estão cadastrados!";
        mensagem.style.color = 'BA8E23';
        return;
    }

    const participante = {
        nome: nome,
        idade: idade,
        matricula: matricula,
        email: email,
        curso: curso,
        modalidade: modalidade,
        minicurso: minicurso,
        turno: turno,
        eventos: eventos
    };

    participantes.push(participante);

    mensagem.innerText = "Inscrição Realizada com Sucesso!"
    mensagem.style.color = "green";
    formulario.reset();
    setTimeout(function () {
        mensagem.innerText = "";
    }, 8000) // 8 segundos;
})

function mostrarInscricao() {
    let inscricao = document.getElementById("inscricao");
    inscricao.style.display = 'block';

    let participantes = document.getElementById("participante");
    participantes.style.display = 'none';
}

function mostrarParticipantes() {
    tabelaParticipantes.innerHTML = "";
    participantes.forEach(function (participante) {

        const linha = document.createElement("tr");
        const dados = [
            participante.nome,
            participante.idade,
            participante.matricula,
            participante.email,
            participante.curso,
            participante.modalidade,
            participante.minicurso,
            participante.turno,
            participante.eventos.join(", ") || "Nenhuma"
        ];

        dados.forEach(function (dado) {
            const coluna = document.createElement('td');
            coluna.innerText = dado;
            linha.appendChild(coluna);
        })

        tabelaParticipantes.appendChild(linha);
    });

    total.innerText = participantes.length;

    let inscricao = document.getElementById("inscricao");
    inscricao.style.display = 'none';

    let participante = document.getElementById("participante");
    participante.style.display = 'block';
}

function verificarMatricula(matricula) {
    let igual = false;
    for (let i = 0; i < participantes.length; i++) {
        if (participantes[i].matricula === matricula) {
            igual = true;
        }
    }
    return igual;
}