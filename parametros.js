
function soma(n1,n2){
    return n1 + n2
}

console.log(soma(7, 5))
console.log(soma(28, 50))
console.log(soma(71, 897))
console.log(soma(95, 658))

function nomesIdades(nome,idade){
    return `Meu nome é ${nome} e tenho ${idade}` // Cuidado ao executar essa função 
}
console.log(nomesIdades("Rodrigo", 35))
console.log(nomesIdades("jessica", 27))
console.log(nomesIdades("Moises", 40))
console.log(nomesIdades("jose", 20))

function multiplicar(numero1 = 1, numero2 = 1){
    return numero1 * numero2 // Numero = 1 nos parametro serve para evitar o NAN 
}
console.log(multiplicar(soma(3 , 3), soma(2 , 3))) // Foi ultilizado a chamada soma de outra função