function crearDocs() {
 //abre documento donde escribira. 
  var doc=DocumentApp.openById('1V1vljN3PA_EOA-rtQwhLE81EANoiGJrYe2ayv3shmSw');
  // contenido de nombres de inscripcion al master
  var sheet =  SpreadsheetApp.openById("10fCkuSC-SUjQOUWAzBuxY2wZ98l6Rlcx8-gAR4-r8Rw");
  //obtiene los titulos del master
  var titulo1 = sheet.getRange("A1:B1").getValues();
  var titulo2 = sheet.getRange("A2:D2").getValues();
  //alumnos inscritos al master
  var contenido = sheet.getRange("A3:B6").getValues();
  
  //fechas de master 
  var sheets =  SpreadsheetApp.openById("1Mk_4IpHIuS4dNQAHKYI3hYrsyVfQ6Oq82z4swUc-qYU");
  var fechas= sheets.getRange("E2:E4").getValues();
  var array=[];
  //cambio de fecha
  for(i=0;i < fechas.length;i++){
   var date=Utilities.formatDate(new Date(fechas[i]), "GMT+1","yyyy/MM/dd");
   array[i]=date;
  }
  
  //inserta titulo en un doc y una tabla con su contenido de alumnos y fechas 
  doc.setText(titulo1+"\n"+titulo2);
  var body = doc.getBody();
  var celda=[
    ['Nombres',array[0],array[0],array[1],array[1]],
    [contenido[1],"","","",""],
    [contenido[2],"","","",""],
    [contenido[3],"","","",""],
    ]
  body.appendTable(celda);

}
