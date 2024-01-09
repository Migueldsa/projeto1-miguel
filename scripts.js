let pessoa = {
    "nome":"Mateus",
    "idade": 26,
    "profissao":"Programador",
    "hobbies": ["Video Game", "Treinar", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
//console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
console.log(pessoaJSON.nome);
console.log(pessoaJSON.hobbies);