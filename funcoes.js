// funções simples
function exibeMsg(msg) {
    console.log(msg);
}
// call fn
exibeMsg('Hello World');
var nmFuncao = 'exibeMsg';
exibeMsg("Uma outra chamada da fun\u00E7\u00E3o " + nmFuncao);
//Funções com parametros(argumentos) opcionais
var soma = 10;
//função com valor padrão(default)
function contador(valor) {
    if (valor === void 0) { valor = 1; }
    soma += valor;
    console.log(soma);
}
contador();
contador(5);
contador(10);
function contador2(valor) {
    soma += valor;
    console.log(soma);
}
contador2();
// arrow function com expressão ternária
function parOuImpar(valor) {
    return function () { return (valor % 2 == 0) ? "Par" : "Impar"; };
}
