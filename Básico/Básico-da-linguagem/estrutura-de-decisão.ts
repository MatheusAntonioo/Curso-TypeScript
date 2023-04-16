// Fazem com que o nosso programa não somente crie variáveis, mas também tome decisões.
// if / else
// Switch
// Operador ternário

/* 
If / Else

Nos permite criar caminhos baseados em decisões de verdadeiro ou falso
*/
const age = 18
if(age >= 18) {
  alert("Usuário maior de idade")
} else {
  alert("Usuário menor de idade")
}

/*
Switch

Quando não temos operações condicionais complexas, com muito operadores lógicos, talvez o switch seja uma boa escolha.
Quando se varia entre muitos valores diferentes, o switch pode ser uma boa escolha.
Funciona bem quando você só precisa analisar um valor de variável sem condicionais complexas.
Ele não analisa com operadores >,<, e demais.
*/
let option = 3
switch(option) {
  case 1:
    // fazer algo equivalente a opção 1
    break;
  case 2:
    // fazer algo equivalente a opção 2
    break;
  case 3:
    // fazer algo equivalente a opção 3
    break;
  case 4:
    // fazer algo equivalente a opção 4
    break;
}

/*
Operador Ternário

Utilizado para tomadas de decisões simples, retornando valores diferentes para uma condicional.
*/
//const prefix = user.gender === Gender.FEMALE ? "Sra" : "Sr"
