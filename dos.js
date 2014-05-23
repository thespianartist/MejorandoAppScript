
function mandarmail() {
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  for (var i = 0; i < data.length; i++) {

    Logger.log("Nombre: " + data[i][0]);
    Logger.log("Correo: " + data[i][1]);
    
    var doc = DocumentApp.create('Hola Mundo de AppScript'); 
    doc.getBody().appendParagraph('Este Documento fue creado a Partir de AppScript');
    var url = doc.getUrl();
    var email = data[i][1];
    var subject = doc.getName();
    var body = 'Link con tu Documento: ' + url;
    GmailApp.sendEmail(email, subject, body);

  }
 
}