$('#login').on('click', function (event) {
    var pass = $('[name="p"]').val();
    var user = $('[name="u"]').val();

    var data = {
        usuario: user,
        senha: pass
    }
    postRequestMaker('POST', urlGlobal + 'api/login/', data, function (res) {
        if (pass != "" && user != "") {
            if (res.status != 200) {
                $('.auxiliar h6').html('Senha/Usuário incorreto!');
            } else {
                $('.auxiliar h6').html('login bem sucedido!');
                sessionStorage.setItem("user", user);
                $(location).attr('href', 'livros.html')
            }
        } else {
            $('.auxiliar h6').html('Senha/Usuário incorreto!');
         }
    })
});

$('#cadastro').on('click', function (event) {
    $(location).attr('href', 'cadastro.html');
});


$(document).keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        $('#login').click();
    }
});