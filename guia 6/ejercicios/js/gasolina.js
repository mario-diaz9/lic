window.addEventListener('load',inicio,false);

//Registrar evento click del ratón al presionar botones de envío
function inicio() {
    mostrar.addEventListener('click',cal);
}
totalFin=0;
function cal(){
    
    cant= document.getElementById("cant").value;
    res= document.getElementById("total");
    
if(document.getElementById('gasSU').checked== true){
    tipo= document.getElementById("gasSU").value;
    totalFin= tipo* cant;
    Math.floor(totalFin);
    document.getElementById("total").value=totalFin;
}
else if(document.getElementById('gasES').checked== true){
    tipo= document.getElementById("gasES").value;
    totalFin= tipo* cant;
    Math.floor(totalFin);
    document.getElementById("total").value=totalFin;
}
else if(document.getElementById('gasDI').checked== true){
    tipo= document.getElementById("gasDI").value;
    totalFin= tipo* cant;
    Math.floor(totalFin);
    document.getElementById("total").value=totalFin;
}
     
    
}