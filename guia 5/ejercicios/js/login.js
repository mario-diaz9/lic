//Registrar evento click del ratón al presionar botones de envío
function iniciar() {
    var btnregistrar = document.getElementById("respuesta");
    if (btnregistrar.addEventListener) {
        btnregistrar.addEventListener("click", registro, false);
    }
    else {
        btnregistrar.attachEvent("onclick", registro);
    }
}
function registro() {
    var rect = new registros(
        document.frmregistro.nombre.value,
        document.frmregistro.apellidos.value,
        document.frmregistro.email.value,
        document.frmregistro.password.value,
        document.frmregistro.password2.value,
        document.frmregistro.fechanac.value);
    return false;
}
function registros(nombres, apellidos, correo, contra, confirContra, fechanac) {
    var tabla = "";
    var codigo;
    this.fechanac = fechanac;
    var letra1 = "";
    var letra2 = "";
    var fecha = new Date();
    var year = fecha.getFullYear();
    var azar = Math.floor(Math.random() * (9999 - 1000));
    if (/^[A-Z ]+$/i.test(nombres) || /^(?:[-A-Z]+ )+[-A-Z]+$/i.test(nombres) ) {
        this.nombres = nombres;
    } else {
        alert("Nombre no valido");
    }
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo)) {
        this.correo = correo;
    } else {
        alert("Correo electronico no valido");
    }
    if ((contra.length > 8) && (contra == confirContra)) {
        this.contra = contra;
        this.confirContra = confirContra;
    } else {
        alert("Contraseñas no coinciden o no superaron los 8 digitos");
    }
 if (/^[A-Z ]+$/i.test(apellidos) ) {
        this.apellidos = apellidos;
        letra1 = apellidos.substr(0, 1);
        letra1 = letra1.toUpperCase();
        letra2 = apellidos.substr(0, 1);
        letra2 = letra2.toUpperCase();
        codigo = letra1 + "" + letra2 + year + azar + "";
       
    } else {
        alert("Apellido no valido");
    }
    tabla += "<table>";
    tabla += "<thead>\n\t<tr>\n\t\t";
    tabla += "<th>codigo</th>\n\t\t";
    tabla += "<th>Nombre</th>\n\t\t";
    tabla += "<th>Apellido</th>\n\t\t";
    tabla += "<th>Correo Electronico</th>\n\t\t";
    tabla += "<th>Fecha nacimiento</th>\n\t\t";
    tabla += "<tbody>\n\t";
    tabla += "<tr>\n\t\t";
    tabla += "<td>" + codigo + "</td>\n\t\t";
    tabla += "<td>" + nombres + "</td>\n\t\t";
    tabla += "<td>" + apellidos + "</td>\n\t\t";
    tabla += "<td>" + correo + "</td>\n\t\t";
    tabla += "<td>" + fechanac + "</td>\n\t\t";
    tabla += "</tr></tbody>\n";
    tabla += "</table>\n";
    document.write(tabla);
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}