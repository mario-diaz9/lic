//Creando el objeto
var book = new Object();
//Registrar evento click del ratón al presionar botones de envío
function iniciar() {
    var showinfo = document.getElementById("mostrar");
    if (showinfo.addEventListener) {
        showinfo.addEventListener("click", function () {
            createObject(document.frmbook);
        }, false);
    }
    else if (showinfo.attachEvent) {
        showinfo.attachEvent("onclick", function () {
            createObject(document.frmbook);
        });
    }
}
// Creando el nuevo objeto
function createObject(form) {
    book.nombre = form.nombre.value;
    book.apellido = form.apellido.value;
    book.correo = form.email.value;
    book.contra = form.password.value;
    book.contra2 = form.password2.value;
    showProperties(book, "InfoBook");
}
function showProperties(objeto, objName) {
    var infBook = "";
    var tblBook = "";
    for (var i in objeto) {
        infBook = infBook + objName + "." + i + " = " + objeto[i] + "\n";
    }
    if (!confirm(infBook + "\n\n¿Es esta información correcta?")) {
        frmbook.cod.value= "dm1232";
        frmbook.nombre.value = "";
        frmbook.apellido.value = "";
        frmbook.email.value = "";
    }
    tblBook += "<!DOCTYPE html>\n";
    tblBook += "<html lang=\"es\">\n";
    tblBook += "<head>\n\t";
    tblBook += "<title>Información del libro</title>\n";
    tblBook += "<meta charset=\"utf-8\" />";
    tblBook += "<link rel=\"stylesheet\"href=\"../css/infolibro.css\"/>\n";
    tblBook += "</head>\n";
    tblBook += "<body>\n";
    tblBook += "<table class=\"bookinfo\">";
    tblBook += "<thead>\n\t<tr>\n\t\t";
    tblBook += "<th>cod</th>\n\t\t";
    tblBook += "<th>nombre</th>\n\t\t";
    tblBook += "<th>apellido</th>\n\t\t";
    tblBook += "<th>email</th>\n\t\t";
    tblBook += "</tr>\n\t</thead>\n";
    tblBook += "<tbody>\n\t";
    tblBook += "<tr>\n\t\t";
    tblBook += "<td>" + book.cod + "</td>\n\t\t";
    tblBook += "<td>" + book.nombre + "</td>\n\t\t";
    tblBook += "<td>" + book.apellido + "</td>\n\t\t";
    tblBook += "<td>" + book.email + "</td>\n\t\t";
    tblBook += "</tr></tbody>\n";
    tblBook += "</table>\n";
    tblBook += "</head>\n";
    tblBook += "</html>\n";
    document.write(tblBook);
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}