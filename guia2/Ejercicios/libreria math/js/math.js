//Declarando e inicializando variables
var i, contador = 1, promedio = 0.0;
var clase = "";
var tabla = "";
var num = parseInt(prompt("Ingrese un numero", ""));

tabla += "<table id=\"mytable\">\n";
tabla += "<tr>\n<th>\nMetodos\n</th>\n";
tabla += "<th class=\"specalt\">Resultados\n</th>\n</tr>\n";
//Obteniendo el promedio de las notas ingresadas

        clasenota = ' class="alt nota"';
        clasetexto = ' class="alt"';
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo abs </td>\n<td" +clasenota + ">\n" + Math.abs(num) + "\n</td>\n</tr>\n";
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo round </td>\n<td" +clasenota + ">\n" + Math.round(num) + "\n</td>\n</tr>\n";
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo ceil </td>\n<td" +clasenota + ">\n" + Math.ceil(num) + "\n</td>\n</tr>\n";
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo floor </td>\n<td" +clasenota + ">\n" + Math.floor(num) + "\n</td>\n</tr>\n";
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo exp </td>\n<td" +clasenota + ">\n" + Math.floor(Math.exp(num,2)) + "\n</td>\n</tr>\n";
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo log </td>\n<td" +clasenota + ">\n" + (Math.log(num)) + "\n</td>\n</tr>\n";
        tabla += "<tr>\n<td" + clasetexto + ">\nMetodo random </td>\n<td" +clasenota + ">\n" + Math.floor(Math.random() * 10) + "\n</td>\n</tr>\n";
    

tabla += "</table>";
document.writeln(tabla);
