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
1. __Seleciona o tipo de pesquisa (Título, Autor, Assunto)__
2. __Efetua a pesquisa de um livro.__	
3. **O sistema busca na base de dados pelas palavras-chave relacionadas ao tipo de pesquisa selecionada.**
4. **O sistema retorna os livros e mostra nas informações a quantidade de livros disponíveis.**

#### Fluxo Alternativo:
##### __Ações do Ator__ **Ações do Sistema**
1. __Seleciona o tipo de pesquisa (Título, Autor, Assunto)__
2. __Efetua a pesquisa de um livro.__
3. **O sistema busca na base de dados pelas palavras-chave relacionadas ao tipo de pesquisa selecionada.**
4. **O sistema retorna uma mensagem informando que não há livros relacionados à pesquisa.**

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

#### Fluxo Alternativo - Desistência/Cancelamento da reserva:
##### __Ações do Ator__ **Ações do Sistema**
1. __O usuário marca o livro que deseja reservar.__
2. **O sistema verifica se o usuário possui pendências registradas e se encontra-se apto para realizar a reserva do livro.**
3. **O sistema não encontra nenhuma pendência registrada.**
4. **Uma mensagem é mostrada ao usuário pedindo que confirme a reserva.**
5. __O usuário clica na opção "cancelar reserva".__
6. **O sistema retorna para a tela com os resultados da pesquisa do livro que o usuário pesquisou.**

#### Fluxo Alternativo - O sistema localiza pendências/irregularidades do usuário:
##### __Ações do Ator__ **Ações do Sistema**
1. __O usuário marca o livro que deseja reservar.__
2. **O sistema verifica se o usuário possui pendências registradas e se encontra-se apto para realizar a reserva do livro.**
3. **O sistema encontra uma ou mais pendências/irregularidades do usuário, identificando que este não está apto a realizar reservas enquanto não regularizar suas pendências.**
4. **Uma mensagem é mostrada ao usuário informando que ele não está apto para realizar reservar pois possui pendências registradas, para resolução deve entrar em contato através do e-mail do site.**
5. **O sistema retorna para a tela com os resultados da pesquisa do livro que o usuário pesquisou.**

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
