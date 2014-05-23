function onFormSubmit(e) {
 
  var tiempoRegistro =  e.values[0];
  var nombre = e.values[1];
  var twitter=  e.values[2];
  var correo = e.values[3];
  
  var body = UrlFetchApp.fetch("https://mejorando.la/");
  
  GmailApp.sendEmail(correo, "Hola! "+nombre+" y Gracias por Registrarte", body);

}
