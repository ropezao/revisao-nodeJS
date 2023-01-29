// Arrow function funciona como expressão de função, não permitindo a chamada antes da vareavel.   Essa função diminui bastante a verbosidade do codigo.

const obejetos = nomeObjeto => `O nome do objeto é ${nomeObjeto}`;
console.log(obejetos("Casa"))

const somar = (numero1, numero2) => numero1 + numero2;
console.log(somar(55,45))

// Caso a função necessite de muitas condições, o uso de chaves sera necessario como o exemplo a baixo 

const somarNumerosGrandes =(numero1, numero2)=>{
    if(numero1 >= 10 && numero2 >= 10){
    return numero1 + numero2
 } else { return "Por favor os dois numeros precisa ser maior que 10 "
}
}
console.log(somarNumerosGrandes(5,10))