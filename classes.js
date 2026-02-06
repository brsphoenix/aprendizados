//crie uma classe pessoa,contendo, nome, idade e metodo apresentar()

class pessoa {

constructor(nome, idade){

    this.nome = nome
    this.idade = idade
}
apresentar(){

    console.log(`Olá, me chamo ${this.nome} e tenho, ${this.idade} anos.`)
}



}

let person = new pessoa("Luís",25)

person.apresentar()