# População do banco e criação de tabelas

#### Criação de tabelas

Em um banco de dados orientado a documento, não fazemos a criação de tabelas por meio de scripts, mas sim, de maneira dinâmica ao adicionar os registros.

* Primeiro, devemos criar a base de dados que será utilizada, para isso, usamos o comando:

```
use biblioteca
```

###### Tabela livros
* Criação da tabela livros, com inserção de um valor:

```
db.livros.insert({
titulo:'Harry Potter e a Pedra Filosofal',
genero:'Fantasia',
autor:'J. K. Rowling',
ano:'1999',
status:"true"
})
```

A tabela será formada por objetos de livros que seguirão o seguinte padrão:
```
{
	titulo:"titulo",
    genero:"genero",
    autor:"autor",
    ano:"ano de lançamento",
    status:"status do livro (emprestado = false/disponível = true)"
}
```

Vale lembrar que sempre que criamos um objeto no MongoDB, ele gera automaticamente um ID para identificar esse objeto.

###### Tabela clientes
* Criação da tabela clientes, com inserção de um valor:

```
db.cliente.insert({
nome:'Cliente de teste',
cpf:'xxx.xxx.xxx-xx',
rg:"xx.xxx.xxx-x",
endereco:
	{
	logradouro:'Rua XXX',
	numero:'00',
	complemento:''
	},
contato:
	{
	telefone:'(xx) xxxx-xxxx',
	email:"xxxxxxxx@xxxxx.com"
	},
ativo: "true"
})
```

A tabela será formada por objetos de clientes que seguirão o seguinte padrão:
```
{
	nome:"nome do cliente",
    cpf:"cpf do cliente",
    rg:"rg do cliente",
    endereco:
 	{
        logradouro:"rua/avenida/alameda",
        numero:"número do endereço",
        complemento:"opcional"
        },
    contato:
    	{
        telefone:"telefone do cliente",
        email:"e-mail do cliente"
        }
    ativo:"status do cliente, indica se ele está com pendências, 
    ou não, para poder pegar fazer o empréstimo de um livro 
    (regular = true, irregular = false)"
}
```

###### Tabela empréstimos
* Criação da tabela de empréstimos, com inserção de um valor:

```
db.emprestimos.insert({
id_cliente:"id do cliente que fez o empréstimo",
id_livro:"id do livro",
observacao:"O livro estava com uma marca de dobra na capa",
data_emprestimo:"new Date()",
data_devolucao:"new Date('2018-10-11')"
})
```

A tabela será formada por objetos de livros que seguirão o seguinte padrão:
```
{
    id_cliente:"id gerado pelo MongoDB",
    id_livro:"id gerado pelo MongoDB",
    observacao:"campo deixado para observações referente ao empréstimo",
    data_emprestimo:"data do empréstimo",
    data_devolucao:"data para devolução do livro"
}
```

Nos casos de data, fazemos a criação de objetos do tipo Date(), para armazenar os resultados.







