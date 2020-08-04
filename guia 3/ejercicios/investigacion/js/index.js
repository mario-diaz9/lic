//ejemplo 1
function crearUsuario(name) { 

    function saludar(){ 
      console.log("¡Hola! Mi nombre es " + name ); 
    }   
    return { 
      get name() { return name }, 
      saludar 
    };
  } 
  var user = crearUsuario('mario'); 
  user.saludar();

//ejemplo 2
function generarClausura () {
    let variable = 1;
    return function Adentro(parametro) {
      console.log('el parametro es ',parametro,
            ' y es la ',variable,' veces que me invocas ');
      variable++;
    }
  }
  let Adentro= generarClausura();
  
  Adentro('Primera llamada');
  Adentro('Segunda llamada');

//ejemplo 3
  function genera() {
    var num = 5;
    function numero() {
      console.log(num);
    }
    num++;
    return numero;
  }
  var number = genera();
  genera(); 

//practico
function suma(x) {
  return function(y) {
    return parseInt( x )+ parseInt( y);
  };
}

var sum = suma(prompt("ingrese un numero"));

console.log(sum(2))
