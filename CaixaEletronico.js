
var contador = true
var saldo = 1000
var nome = prompt("Digite seu nomê :")
var cpf = parseInt(prompt("Digite seu CPF :"))
console.log("Nome Cliente :", nome, "\nCPF :", cpf);


while (contador) {
  

        var opcao = prompt("Digite:(1) SAQUE ou (2) DEPOSITO")

        var valor = parseFloat(prompt("Digite um valor: "))
        console.log("Valor digitado R$",valor)

        if (opcao == 1) {
            saldo = saldo - valor

        }
        if (opcao == 2) {

            saldo = saldo + valor
        }
        console.log("Seu saldo em conta é R$", saldo)

    var continuar = prompt("deseja continur?\n Aperte (ENTER), se não (3) ")
    if (continuar == 3) {
        contador = false
    }
}