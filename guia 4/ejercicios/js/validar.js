function iniciar() {
    var boton = document.getElementById("validar");
    if (boton.addEventListener) {
        boton.addEventListener("click", validar, false);
    }
    else if (boton.attachEvent) {
        boton.attachEvent("onclick", validar);
    }
}
function validar() {
    var tipo = document.frmdatos.seltipo.options[frmdatos.seltipo.selectedIndex].value;
    var dato = document.frmdatos.txtdato.value;
    var valido = false;
    var re = null;
    //alert(dato + "|" + tipo);
    if (dato == null || dato == "" || dato.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de formulario");
        return 0;
    }
    switch (tipo) {
        //255.255.255.255
        case "direcciones IPv4":
            re = /^[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{3}$/;
            if (re.test(dato)) {
                valido = true
            }
            if (valido == true) {
                alert("La direccion IPv4 " + dato + " de " + tipo + " ingresado es válido");
            }
            else if (valido == false) {
                alert("La direccion IPv4 " + dato + " de " + tipo + " ingresado es inválido");
            }
            break;
        //direcciones web
        case "direcciones web":
            re = (/^(ftp|http|https):\/\/[^ "]+$/) || ('html5shiv.googlecode.com/svn/trunk/html5.js');
            if (re.test(dato)) {
                valido = true
            }
            if (valido == true) {
                alert("La direcciones web " + dato + " de " + tipo + " ingresado es válido");
            }
            else if (valido == false) {
                alert("La direcciones web " + dato + " de " + tipo + " ingresado es inválido");
            }
            break;
            //direcciones de correo
            case "direcciones de correo ":
            re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
            if (re.test(dato)) {
                valido = true;
            }
            if (valido == true) {
                alert("La direcciones de correo" + dato + " de " + tipo + " ingresado es válido");
            }
            else if (valido == false) {
                alert("La direcciones de correo" + dato + " de " + tipo + " ingresado es inválido");
            }
            break;

        default:
            alert("El tipo de dato seleccionado no puede ser procesado");
            break;
    }
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}