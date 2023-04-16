/*
  - String
  - Number
  - Boolean
  - Array
  - Enum
  - Tuple
  - Unknown
  - Any
  - Void
*/

// String = tipo texto
const str: string = "Matheus"

// Number = tipo numérico
const num: number = 27
const num2: number = 2.7

// Boolean = tipo verdadeiro ou falso
const boo: boolean = true
const boo2: boolean = false

// Array = tipo lista
const arr: Array<string> = ["Matheus", "Geórgia", "Antonio"]

// Enum = tipo enumerador
// Quando temos uma variável que pode assumir valores específicos e de quantidade finita
enum PaymentMethods {
  creditCard,
  debitCard,
  transfer,
}

// Tuple
// Quando trabalhamos com listas de tamanhos definidos onde os elementos da mesma podem variar entre vários tipos, podemos utilizar o tuple.
const tup: [string, number] = ["Matheus", 27]

// Unknown e Any
// Quando não sabemos o tipo específico de uma variável ou aceitamos qualquer tipo, podemos utilizar o unknown. Any remove o typechecking **cuidado**
const name1: unknown = "Matheus"
const age: unknown = 27
//const an: any = metodoDeUmaBibliotecaSemTS()

// Void
// É usado para definir os valores de saída de uma função que não retorna nada.
const setUserAge = (age: number): void => {
  // Definição da função...
}