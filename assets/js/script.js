$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();


    $('#enviarCorreo').click(function(){
        alert("El correo fue enviado correctamente...");
    });

    $('h4').on('dblclick', function() {
        $(this).css(
            'color', 'red'
        );
    });
    
    $(".titulo-tarjeta").on( "click", function() {
        $( ".contenido-tarjeta").toggle('slow');
    });    
});