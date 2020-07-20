var base ;
while ((isNaN(base))){
    base = prompt('introduce el nuero del que quieres ver la tabla');
}

document.write('<h1>Tablas de multiplicar</h1>');
document.write('<h2>la tabla del: ' + base + '</h2>');
for (n = 1; n < 11; n++) {
    document.write('<p> ' + base + ' x ' + n + ' = <span>' + base * n + ' </span></p>');
}