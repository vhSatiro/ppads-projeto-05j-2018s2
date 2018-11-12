var urlGlobal = 'http://localhost:4321/'
$(document).ready(function (e) {
    $('#searchButton').on('click', function (event) {
        $('#resultsTable tbody tr').remove();
        var checkedOption = $('[name=optradio]:checked').val();
        var tag = $('[name=searchField]').val();
        requestMaker('GET', urlGlobal + 'api/livros/?filtro=' + checkedOption + '&tags=' + tag, function (res) {
            populateTable(res);
        });
    });
});

function requestMaker(type, url, callback) {
    $.ajax({
        dataType: "json",
        type: type,
        url: url,
        success: function (data) {
            callback(data);
        },
        error: function (e) {
            callback(e);
        }

    });
}

function populateTable(data) {
    var $container = $('#resultsTable tbody');
    for (var i = 0; i < data.length; i++) {
        var botaoReservar = '';
        switch (data[i].status) {
            case 'D':
                botaoReservar = '<button type="button" class="btn btn-success">Reservar</button>';
                break;
            case 'E':
                botaoReservar = '<h6>Livro emprestado</h6>';
                break;
            case 'R':
                botaoReservar = '<h6>Livro reservado</h6>';
                break;
            default:
                botaoReservar = '';
                break;
        }
        $container.append(
            '<tr>\n\
            <td class="bookId" style="display:none;">'+ data[i]._id + '</td>\n\
            <td class="titulo">'+ data[i].titulo + '</td>\n\
            <td>'+ data[i].genero + '</td>\n\
            <td>'+ data[i].descricao + '</td>\n\
            <td>'+ data[i].ano + '</td>\n\
            <td>'+ botaoReservar + '</td>\n\
            </tr>'
        );
        var $lastLine = $container.find('tr').last();
        $lastLine.find('button').on('click', function (event) {
            var id = $(this).parent().siblings('td.bookId').html();
            requestMaker('PUT', urlGlobal + 'api/livros/' + id, function (res) { 
                console.log(res);
            })
        })
    }
}
