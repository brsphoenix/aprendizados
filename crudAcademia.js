const alunos = []

let proximoId = 1

function criarAluno (nome,idade,modalidade) {

    if (!nome || !modalidade){
        console.log(`O nome e modalidade são obrigatórios!`)
        return
    }

    if (idade <= 0){
        console.log(`A idade é inválida!`)
        return
    }



const aluno = {
    id: proximoId,
    nome,
    idade,
    modalidade,
    ativo: true
}

alunos.push(aluno)

proximoId++

console.log("Aluno criado com sucesso")


}

function mostrarAlunos(){

    if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado")
    return
}

for (let i = 0; i < alunos.length; i++) {

const aluno = alunos[i]



console.log(`ID: ${aluno.id}`)
console.log(`Nome: ${aluno.nome}`)
console.log(`Idade: ${aluno.idade}`)
console.log(`Modalidade: ${aluno.modalidade}`)
console.log(`Ativo: ${aluno.ativo}`)
console.log("------------")
}

}

function buscarAluno(nome) {

    let encontrado = false

    for (let i = 0; i < alunos.length; i++) {

        const aluno = alunos[i]

        if (aluno.nome === nome) {

            console.log(`ID: ${aluno.id}`)
console.log(`Nome: ${aluno.nome}`)
console.log(`Idade: ${aluno.idade}`)
console.log(`Modalidade: ${aluno.modalidade}`)
console.log(`Ativo: ${aluno.ativo}`)
console.log("------------")


            encontrado = true
            break
        }
    }

    if (!encontrado) {
        console.log("Aluno não encontrado")
    }
}

function atualizarAluno(id, novosDados) {

    let encontrado = false

    for (let i = 0; i < alunos.length; i++) {

        const aluno = alunos[i]

        if (aluno.id === id) {

            if (novosDados.nome) {
                aluno.nome = novosDados.nome
            }

            if (novosDados.idade) {
                aluno.idade = novosDados.idade
            }

            if (novosDados.modalidade) {
                aluno.modalidade = novosDados.modalidade
            }

            console.log("Aluno atualizado com sucesso")

            encontrado = true
            break
        }
    }

    if (!encontrado) {
        console.log("Aluno não encontrado")
    }
}

function removerAluno(id) {

    let encontrado = false

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].id === id) {

            alunos.splice(i, 1)

            console.log("Aluno removido com sucesso")

            encontrado = true
            break
        }
    }

    if (!encontrado) {
        console.log("Aluno não encontrado")
    }
}


criarAluno(`Luís`,25,`Karatê`)
mostrarAlunos()
buscarAluno(`Luís`)
atualizarAluno(1,{idade: 28})
atualizarAluno(1,{modalidade: `boxe`})
mostrarAlunos()
removerAluno(1)
mostrarAlunos()

