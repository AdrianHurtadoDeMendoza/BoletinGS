function CalendarioSheets(){

  //Vinculamos el correo donde sacaremos el calendario con todos los eventos.
  //We link the mail where we'll get the calendar with all the events.
  var email = Session.getActiveUser().getEmail();
  var mycal = email;
  var cal = CalendarApp.getCalendarById(mycal);

  //Decimos desde que fecha a que fecha quiere que recojamos los eventos
  //We say from what date to what date you want us to pick up the events
  var events = cal.getEvents(new Date("January 1, 2018 00:00:00 CST"), new Date("December 30, 2018 23:59:59 CST"));

  //Creamos el encabezado del sheets.
  //We create the header of the sheets.
  var sheet = SpreadsheetApp.getActiveSheet();
  var header = [["Calendar Address", "Event Title", "Event Description", "Event Location", "Event Start", "Event End", "Calculated Duration", "Visibility", "Date Created", "Last Updated", "MyStatus", "Created By", "All Day Event", "Recurring Event"]]
  var range = sheet.getRange(1,1,1,14);
  range.setValues(header);

  
  //Recorremos los eventos y los vamos clasificando segun el header
  //We go through the events and we classify them according to the header
  for (var i=0;i<events.length;i++) {
    var row=i+2;
    var myformula_placeholder = '';
    var details=[[mycal,events[i].getTitle(), events[i].getDescription(), events[i].getLocation(), events[i].getStartTime(), events[i].getEndTime(), myformula_placeholder, ('' + events[i].getVisibility()), events[i].getDateCreated(), events[i].getLastUpdated(), events[i].getMyStatus(), events[i].getCreators(), events[i].isAllDayEvent(), events[i].isRecurringEvent()]];
    var range=sheet.getRange(row,1,1,14);
    range.setValues(details);
    
    var cell=sheet.getRange(row,7);
    cell.setFormula('=(HOUR(F' +row+ ')+(MINUTE(F' +row+ ')/60))-(HOUR(E' +row+ ')+(MINUTE(E' +row+ ')/60))');
    cell.setNumberFormat('.00');

  }
}
