//Registrar evento click del ratón al presionar botones de envío 
function iniciar() {
    var btnarea = document.getElementById("area");
    if (btnarea.addEventListener) {
        btnarea.addEventListener("click", potencia, false);
    }
    else {
        btnarea.attachEvent("onclick", potencia);
    }
}
function potencia() {
    var rect = new calpotencia(document.frmPotencia.txtbase.value,
        document.frmPotencia.txtpot.value);
        rect.mostrar(rect.carea(), " potencia");
    return false;
}

//Creando una clase rectángulo
function calpotencia(base, potencia) {
    //Propiedades de la clase
    this.base = parseFloat(base);
    this.altura = parseFloat(potencia);
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.carea = new Function("return Math.pow(this.base , this.altura)");

    this.mostrar = new Function("valor", "tipoc", "document.frmPotencia.txtresp.value=('La potencia es: ' + valor)");
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
} 