class hero {

constructor(nome,idade,tipo){
this.nome = nome
this.idade = idade
this.tipo = tipo

}
ataque(){
    switch(this.tipo){

        case "guerreiro" : console.log(`o herói, ${this.nome}, atacou utilizando sua espada.`)
break
        case "mago" : console.log(`O herói, ${this.nome}, atacou utilizando magia.`)
break
        case "maryzinha" : console.log(`O herói, ${this.nome}, atacou utilizando amor pelos animais`)
break
        case "druída" : console.log(`O herói, ${this.nome}, atacou utilizando garras de urso.`)
break
        default : console.log(`O herói, ${this.nome}, está perdido e não sabe o que faz.`)

     }


   }

}

let heroi = new hero("Mary",25,"maryzinha")

heroi.ataque()
