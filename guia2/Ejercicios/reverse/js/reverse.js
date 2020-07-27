var reves;
var notas = [];
var n = parseInt(prompt("¿Cuántas numeros va a ingresar?", ""));
for (i = 0; i < n; i++) {
    notas[i] = parseFloat(prompt("Ingrese el numero:  " + (i + 1), ""));
}

document.write("<h2>Este arreglo ingresado por usted: ")
//document.write("<h3> ")
for (i = 0; i < n; i++) {
document.write(notas[i]);
}
document.write("</h2> ")
document.write("<br>");

reves=notas.reverse();
    document.write("Este arreglo esta ocupando la funcion reverse: "+reves); 