// a declaração da variável vai depender se você vai precisar alterar ela depois ou não.

// variáveis constantes. O valor de uma constante não pode ser alterado. uma vez atribuído um valor, esta constante permanece assim até o final da execução deste programa.

const Name = "Matheus"
// Name = "joão" 

// A constante não proíbe alterar lista ou propriedades.
// Quando trabalhamos com Objetos, a constante não proíbe que o conteúdo de uma lista ou as propriedades de um objeto sejam alterados, ela somente proíbe que sua constante seja atribuída a outro objeto, mas é possível sim alterar o conteúdo dos mesmos.
function getCustomers(){}
const customers = getCustomers()
// customers = [] //jeito errado
// customers.push ("anotherCustomer")

// Valores mutáveis

let name2 = "matheus"
name2 = "João"