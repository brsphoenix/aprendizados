
class heroStatus {

    constructor(vida,nivel){
        this.vida = vida
        this.nivel = nivel
        
    }

    receberDano(){
        
            this.vida -= 5
            console.log(`Você recebeu 5 de dano.`)
            console.log(`Vida atual:${this.vida}`)
  

    }

    subirNivel(){
        if(this.nivel > 25){
            console.log(`Parabéns, você subiu de nível e agora seu nível é:${this.nivel}`) 
        }
        else{ 
            console.log(`Você ainda não subiu de nível.`)
        }

    }
}
let hero = new heroStatus (20,26)

hero.receberDano()
hero.subirNivel()
