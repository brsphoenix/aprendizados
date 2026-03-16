const alunos = []

function criarAluno (nome) {

    alunos.push(nome)

}
function listarAlunos (){
console.log(alunos)

}
function editarAlunos(indice,nomeNovo){

    alunos[indice] = nomeNovo

}

function deletarAlunos (indice){

    alunos.splice(indice,1)
}
criarAluno("Luis");
criarAluno("Ana");

listarAlunos();

editarAlunos(0, "Luis Magno");

deletarAlunos(1);


listarAlunos()