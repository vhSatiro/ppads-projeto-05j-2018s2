# ESPECIFICAÇÃO DOS CASOS DE USO

1. CADASTRO DO CLIENTE
#### Nome: Caso de Uso - Efetuar Cadastro
#### Ator Principal: Cliente
#### Resumo: Este caso de uso permite que o cliente efetue o cadastro no sistema
#### Pré-Condições	
#### Pós-Condições: Reservar um Livro
##### Fluxo Principal:
###### Ações do Ator:	Ações do Sistema
2. Seleciona a opção cadastrar	
	2. O sistema apresenta um formulário com dados do cliente para preencher.
2. O cliente preenche o formulário corretamente e clica no botão enviar	
	2. O sistema processa as informações e efetua inclusão no banco de dados.

1. CONSULTAR LIVRO
#### Nome: Caso de Uso - Consultar livro
#### Ator Principal: Cliente
#### Resumo: Este caso de uso permite que o cliente consulte a disponibilidade de um livro na plataforma.
#### Pré-Condições: Cliente cadastrado no sistema	
#### Pós-Condições: Consulta do estado do livro
##### Fluxo Principal:
###### Ações do Ator:	Ações do Sistema
3. Efetua a pesquisa de um livro.	
	3. O sistema busca na base de dados pelas palavras-chave.
3. O sistema retorna os livros e mostra nas informações a quantidade de livros disponíveis.
	

1.3.	 RESERVAR LIVRO

Nome Caso de Uso	Manter médico
Ator Principal	Cliente
Resumo	Este caso de uso permite que o Cliente Efetue a reserva de um livro
Pré-Condições	Possuir cadastro
Pós-Condições	Reservar livro
Fluxo Principal
Ações do Ator	Ações do Sistema
1.	Selecionar a opção reservar livro	
	2.	Caso o livro esteja disponível, o sistema apresenta um formulário para ser preenchido
3.	Preenche o formulário e clica em reservar	
	4.	O sistema confirma os dados e muda o status do livro para reservado

