$(document).ready(function() {
  $('#btn_cv').on('click', function() {
    // Crea un enlace temporal para descargar el archivo
    var link = document.createElement('a');
    link.href = './doc/CV.pdf'; // Ruta del archivo PDF
    link.download = 'Curriculum_Aldebaran_Pastrana.pdf'; // Nombre del archivo descargado

    // Añade el enlace temporal al DOM, dispara el evento click y lo elimina
    $('body').append(link);
    link.click();
    $(link).remove();
  });
  // Descarga la llave pública
  $('#btn_key').on('click', function() {
    const link = $('<a>') // Crear un elemento <a> dinámico
      .attr('href', './doc/public_alde.pem') // Ruta al archivo
      .attr('download', 'Llave_Publica_Alde.pem') // Nombre del archivo descargado
      .appendTo('body'); // Añadir al DOM
    link[0].click(); // Simular clic en el enlace
    link.remove(); // Eliminar el enlace después de la descarga
  });
});
