$('#login').on('click', function (event) {
    // var pass = $('[name="p"]').val();
    // var user = $('[name="u"]').val();
    var pass = 'teste123';
    var user = 'teste123';

    var data = {
        usuario: user,
        senha: pass
    }
    postRequestMaker('POST', urlGlobal + 'api/login/', data, function (res) {
        if (res.status != 200) {
            $('.auxiliar h6').html('Senha/Usuário incorreto!');
        } else {
            $('.auxiliar h6').html('login bem sucedido!');
            sessionStorage.setItem("user", user);
            $(location).attr('href', 'livros.html')
        }
    })
});