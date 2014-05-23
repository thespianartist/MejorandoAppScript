

function createAndSendDocument() {
  
  //Crear un nuevo Documento de Nombre Hola Mundo de AppScript
  var doc = DocumentApp.create('Hola Mundo de AppScript');
  //Obtenemos el Body del Documento y agregamos un Parrafo
  doc.getBody().appendParagraph('Este Documento fue creado a Partir de AppScript');
  //URL del Documento Generado 
  var url = doc.getUrl();
  //Obtenemos nuestro Correo Electronico
  var email = Session.getActiveUser().getEmail();
  //El asunto es el nombre del Documento
  var subject = doc.getName();
  //El cuerpo del correo max 20kb indica la URL de nuestro documento
  var body = 'Link con tu Documento: ' + url;
  //Enviamos el correo (: 
  GmailApp.sendEmail(email, subject, body);

}

 