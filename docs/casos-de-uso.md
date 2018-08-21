# ESPECIFICAÇÃO DOS CASOS DE USO

## 1. CONSULTAR LIVRO
### Nome: Caso de Uso - Consultar livro
### Ator Principal: Cliente
### Resumo: Este caso de uso permite que o cliente consulte a disponibilidade de um livro na plataforma.
### Pré-Condições: 
* Cliente cadastrado no sistema	
### Pós-Condições: 
* Consulta do estado do livro
#### Fluxo Principal:
##### __Ações do Ator__	**Ações do Sistema**
1. __Efetua a pesquisa de um livro.__	
2. **O sistema busca na base de dados pelas palavras-chave.**
3. **O sistema retorna os livros e mostra nas informações a quantidade de livros disponíveis.**

## 2. RESERVAR LIVRO
### Nome: Caso de Uso - Reservar livro
### Ator Principal: Cliente
### Resumo: Este caso de uso permite que o cliente faça a reserva de um livro disponível para buscá-lo.
### Pré-Condições: 
* Cliente cadastrado no sistema
* Sistema disponibilizar os livros disponíveis
### Pós-Condições:
* Livro reservado para ser retirado
#### Fluxo Principal:
##### __Ações do Ator__	**Ações do Sistema**
1. __Cliente seleciona um livro disponível e escolhe a opção de reservá-lo para empréstimo.__	
2. **O sistema muda o estado do livro para reservado, salvando junto o nome do cliente.**

## 3. EMPRÉSTIMO DO LIVRO 
### Nome: Caso de Uso - Fazer empréstimo do livro
### Ator Principal: Administrador da biblioteca
### Resumo: Este caso de uso é feito pelo administrador da biblioteca, quando o cliente vai buscar o livro, realizando assim o empréstimo.
### Pré-Condições: 
* Cliente cadastrado no sistema
* Livro reservado para o cliente
### Pós-Condições:
* Empréstimo do livro é feito
#### Fluxo Principal:
##### __Ações do Ator__	**Ações do Sistema**
1. __Administrador pesquisa pelo nome do livro no sistema.__	
2. **O sistema retorna o livro.**
3. __Administrador confere a reserva do usuário.__
4. __Caso a reserva esteja feita, o administrador faz o empréstimo no sistema e entrega o livro para o cliente.__
