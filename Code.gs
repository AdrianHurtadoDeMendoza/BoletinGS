function myFunction() {
  
    /* Abrimos el documento */
    /*we open the document*/
    var doc = DocumentApp.openByUrl("https://docs.google.com/document/d/1YYTkSCjvcp96413vhMRMKY0y-q0_Nptkd9ihinC6Rn0/edit");
    
  
    /* Creamos Slider  */
    /* We created Slider  */
   var slider = SlidesApp.openByUrl("https://docs.google.com/presentation/d/18Sygui-M5YaFR0GyueE4-_o9_wHBNIK_8lMdk_Cfek4/edit#slide=id.p");
  
    /* Leemos cada página y cargamos en array y creamos Diapositiva por elemento del array */
    /*We read each page and load into array and create Slide by array element */
  var parrafos = doc.getBody().getParagraphs();
  
  for(var i=0;i<parrafos.length;i++){
   /* recorremos todos los parrafos del documento */
   /*we go through all the paragraphs of the document */
    var parrafo = parrafos[i].getText();
    if(parrafo != '\n'){
      slider.appendSlide();
      var slide = slider.getSlides()[i];
      var shape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 10, 20, 700, 60);
      var textRange = shape.getText();
      textRange.setText(parrafo);
    }
    
  }
  
  
  
  
  
  
}
