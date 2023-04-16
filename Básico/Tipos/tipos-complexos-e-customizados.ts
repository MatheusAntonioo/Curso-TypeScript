type user = {
  name: string;
  age: number;
}

// segundo exemplo

enum Gender {
  Male,
  Female,
}

enum Roles {
  Admin,
  NormalUser,
}

type User = {
  name: string
  age: number
  gender: Gender
  roles: Array<Roles>
}

// Tipos customizados são um conjunto de tipos básicos.
// para adicionar uma propriedade não obrigatória é so inserir o ? no final da especificação

type user2 = {
  name: string,
  age: number,
  gender: Gender,
  roles: Array<Roles>
  hairColor?: string
}