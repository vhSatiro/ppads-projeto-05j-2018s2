$(document).ready(function (e) {
    $('#searchButton').on('click', function (event) {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://localhost:4534/api/livros/",
            success: function (data) {
                debugger;
            }, //END success
            error: function (e) {
                debugger;
            } // END error

        }); // END $.ajax

    }); // END Function, END ready
});
