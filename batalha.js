//criar um sistema de batalha PvP, onde tenha os ataques alternados, mostre o vencedor

class hero {

constructor(nome,tipo,vida){
this.nome = nome
this.tipo = tipo
this.vida = vida
}
ataque(alvo){
   console.log(`O herói ${this.nome}, atacou ${alvo.nome}.`)
alvo.dano(5)
     }
   

   dano(valor){
    this.vida -= valor
    console.log(`${this.nome} recebeu ${valor} de dano. Vida atual: ${this.vida}`)
   }


}

let hero1 = new hero ("lulu","mago",25)
let hero2 = new hero ("mary","maryzinha",35)

function batalhar(hero1,hero2){
    while(hero1.vida > 0 && hero2.vida > 0){
    hero1.ataque(hero2)
    if(hero2.vida <= 0) break

    hero2.ataque(hero1)
    if(hero1.vida <= 0) break

}
if(hero1.vida <= 0 ) {
    console.log(`O ${hero1.nome} morreu e o ${hero2.nome} foi o vitorioso.`)
}
else{
    console.log(`O ${hero2.nome} morreu e o ${hero1.nome} foi o vitorioso.`)
}

}

batalhar(hero1,hero2)
