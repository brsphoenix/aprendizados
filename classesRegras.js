// crie uma classe contaBancaria que tenha saldo,depositar,sacar e bloquear saldo negativo

class contaBancaria{
  constructor(saldo){
     this.saldo = saldo
     }

depositar(valor){

if(valor > 0){
    this.saldo = this.saldo + valor
    console.log(`Seu deposito foi efetuado.`)
}
else{ console.log(`Deposito não efetuado.`)}

}
sacar(valor){
    if(valor > this.saldo || valor <= 0){
        console.log(`Seu saque foi recusado.`)
    }
    else{
        this.saldo = this.saldo - valor
        console.log(`Seu saque foi efetuado com sucesso.`)
    }

}

verSaldo(){
    console.log(this.saldo)
}


}


let teste = new contaBancaria(900)

teste.depositar(50)
teste.verSaldo()
teste.sacar(10)
teste.verSaldo()