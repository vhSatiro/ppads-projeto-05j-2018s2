$('#cadastro').on('click', function (event) {
    var pass = $('[name="p"]').val();
    var user = $('[name="u"]').val();
    var email = $('[name="e"]').val();
    var nome = $('[name="n"]').val();
    var data = {
        usuario: user,
        senha: pass,
        nome: nome,
        email: email,
        admin: 'false'
    }
    postRequestMaker('POST', urlGlobal + 'api/users/', data, function (res) {
        if (pass != "" && user != "" && email != "" && nome != "") {
            if (res.status != 200) {
                $('.auxiliar h6').html('Ocorreu um problema!');
            } else {
                $('.auxiliar h6').html('Usuário criado!');
                $(location).attr('href', 'index.html')
            }
        } else { 
            $('.auxiliar h6').html('Há algum campo vazio!');
        }
    })
});
$(document).keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        $('#cadastro').click();
    }
});

$('#voltar').on('click', function (event) {
    $(location).attr('href', 'index.html');
});