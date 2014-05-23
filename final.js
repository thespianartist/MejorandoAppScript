var HEADER_SIZE=1;                                                  
var FOOTER_SIZE=0; 
var TEMPLATE_ID="1BJf67eHeY9HNAcx3Se9TIn8VJp-9n9mRCxb7nPrbFHA";

function myFunction() {
  
  var sheet = SpreadsheetApp.getActiveSheet();                      
  var data  = sheet.getDataRange().getValues();                     
  var total =(data.length)-(HEADER_SIZE+FOOTER_SIZE);                
  
  var sl =  HEADER_SIZE;                                             
  var il =  (total+HEADER_SIZE);                                     
  var users = [];                                                    
   
  for(i=sl; i<il; i++){ 
    users.push(data[i]);                                           
  }                                                                
  

  var usersData = [];
  
  for(i in users){
    
    var row           = users[i];
    var tiempoRegistro  = row[0];  
    var nombre    = row[1];     
    var twitter   = row[2]; 
    var correo    = row[3]; 
   
    
    
    var userData= new toObject(tiempoRegistro,nombre, twitter,correo); //creamos un objeto, con cada usuario
    Logger.log(userData);
    usersData[i] = userData;
  }
  
  return usersData;
  
 }

function toObject(tiempoRegistro, nombre, twitter, correo){
  this.tiempoRegistro = tiempoRegistro;
  this.nombre = nombre;
  this.twitter = twitter;
  this.correo = correo;
}


function doGet() {
  var datos = myFunction();
  return ContentService.createTextOutput(JSON.stringify(datos)).setMimeType(ContentService.MimeType.JSON); //convertimos la respuesta a JSON
}





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
