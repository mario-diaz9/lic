var num = prompt( 'ingrese la temperatura en celsius');
    var faren;
    faren=((1.8*num)+32);
if(faren>81 ){
    

    document.write("<h1>la temperatura en Fahrenheit es: " + faren + " F</h1>");
    var texto="<img src='img/images.jpg' alt='Imagen' />";
   document.writeln(texto);

}
else if(faren<80 && faren > 30){

    document.write("<h1>la temperatura en Fahrenheit es: " + faren + " F</h1>");
    var texto="<img src='img/normal.png' alt='Imagen' />";
   document.writeln(texto);
    
}
else if(faren<30 && faren > -9){

    document.write("<h1>la temperatura en Fahrenheit es: " + faren + " F</h1>");
    var texto="<img src='img/fresco.jpg' alt='Imagen' />";
   document.writeln(texto);
}
else if(faren < -10){

    document.write("<h1>la temperatura en Fahrenheit es: " + faren + " F</h1>");
    var texto="<img src='img/congelado.jpg' alt='Imagen' />";
   document.writeln(texto);
}