$(document).ready(function() {
  $('#btn_certificado').on('click', function() {
    // Crea un enlace temporal para descargar el archivo
    var link = document.createElement('a');
    link.href = '../doc/python.pdf'; // Ruta del archivo PDF
    link.download = 'Certificado.pdf'; // Nombre del archivo descargado

    // Añade el enlace temporal al DOM, dispara el evento click y lo elimina
    $('body').append(link);
    link.click();
    $(link).remove();
  });
});