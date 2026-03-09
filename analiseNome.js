function analiseNome (nome) {

    console.log(`Nome original: ${nome}`)

    const semEspaco = nome.replace(" ", "")
    console.log(`Total de letras: ${semEspaco.length}`)
    console.log(`Maiúsculo: ${nome.toUpperCase()}`)
    console.log(`Minúsculo: ${nome.toLowerCase()}`)

    const partes = nome.split(" ")
    console.log(`Primeiro nome: ${partes[0]}`)
    console.log(`Sobrenome: ${partes[partes.length - 1]}`)

}
analiseNome(`Luís Magno`)