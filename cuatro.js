var TEMPLATE_ID="1BJf67eHeY9HNAcx3Se9TIn8VJp-9n9mRCxb7nPrbFHA";


function onFormSubmit(e) {
 
  var tiempoRegistro =  e.values[0];
  var nombre = e.values[1];
  var twitter=  e.values[2];
  var correo = e.values[3];
  

  var docId = DocsList.getFileById(TEMPLATE_ID).makeCopy().getId();
  var doc = DocumentApp.openById(docId);
  doc.setName("Exito al Registrarte "+nombre);
  var body = doc.getActiveSection();
 
  body.replaceText("%nombre%", nombre);
  body.replaceText("%twitter%", twitter);
 
  doc.saveAndClose();
  
  //Una pausa para el servidor, de no ser así se satura y manda error
  Utilities.sleep(3000);
  
 
  GmailApp.sendEmail(correo, "Hola! "+nombre+" y Gracias por Registrarte", "Los datos del evento estan aqui:" +doc.getUrl());

}