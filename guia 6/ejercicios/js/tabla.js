window.addEventListener('load',inicio,false);
function inicio(){
    enviar.addEventListener('click',newTable);
    editarT.addEventListener('click',nuevoTex);
}
var cont="";
function newTable(){
    fila = document.getElementById("fil").value;
    columna = document.getElementById("col").value;
    tabla = document.getElementById("tablaDinamica");
    cont+="<table >";
    for(j=1;j<= fila; j++){
        cont+="<tr>";
        for(i=1; i<=columna; i++){
            cont+="<td id="+j+i+">" 
            cont+= "Hilera ("+j+","+i+")"
            cont+="</td>";
        }    
        cont+="</tr>";
    }
    cont+="</table>";
    tabla.innerHTML= cont;
}
function nuevoTex(){
  cont="";    
    if(document.getElementById("coodenadaFila").value<=fila){
      cooFila = document.getElementById("coodenadaFila").value;
    }
    else{     
      alert('La fila que ingreso no existes :(');
      return 0;
    }
    if(document.getElementById("coodenadaColumna").value<=columna){
      cooCol = document.getElementById("coodenadaColumna").value;
    }
    else{  
      alert('La columna que ingreso no existes :(');
      return 0;
    }
    dato = document.getElementById("dato").value;

    Coordenada=(cooFila)+(cooCol);
    textoNuevo = document.getElementById(Coordenada);
    cont+=dato;
    textoNuevo.innerHTML=cont;
} 