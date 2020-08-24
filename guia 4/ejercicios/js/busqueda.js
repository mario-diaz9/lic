//Definir la matriz o arreglo con los datos

var lista = new Array('Abdominal', 'ABEJA', 'ABETO', 'ABOLENGO', 'AUTISMO', 'BACTERIA',
    'BALA', 'BALÓN', 'BAMBÚ', 'CABELLO', 'CADENA', 'CALCIO',
    'DADO', 'DARDO', 'DÉCADA', 'ECLIPSE', 'EDEMA',
    'EJE', 'FÁCIL', 'FACULTAD', 'FALTA',
    'GALA', 'GALAXIA', 'HABITOS', 'HACKER', 'ICONO',
    'IDILIO', 'IMPOSTURA', 'INDICADOR', 'JABÓN', 'JEFE', 'JAVA',
    'JSON', 'KINÉSICA', 'KIOSCO', 'LABORATORIO', 'LAJA', 'LÁPIZ',
    'LÁSER', 'MACRO', 'MAESTRIA', 'MALBEC', 'MICROTÚBULO', 'NARDO',
    'NITRITO', 'NODO', 'NULO', 'OBRA', 'OCASO', 'ODA', 'OPERA',
    'PACTO', 'PALACIO', 'QUARTZ', 'QUICIO', 'RABINO', 'SACAROSA', 'TABÚ',
);
var lista2 = new Array(
    'latín abdomen, el abdomen es un concepto que se refiere al vientre. En los mamíferos, es la cavidad del cuerpo que queda limitada por el diafragma o el conjunto de vísceras de dicha región. ',
    'Las abejas son insectos que miden alrededor de quince milímetros de largo y forman colonias compuestas por una única hembra fecundada (Reina), varias hembras estériles(obreras) y una gran cantidad de machos (zánganos). ',
    'Es importante conocer, en primer lugar, el origen etimológico de esta palabra. Y eso nos lleva a determinar que deriva del latín, en concreto, de “abies” – “abietis”, que fue como se dio en llamar antiguamente a una especie vegetal de la familia Pinacea.',
    'Abolengo, que deriva del término abuelo, es un concepto que refiere a los antepasados. Por lo general la noción alude al linaje o a una ascendencia insigne.',
    'El concepto de autismo abarca a una serie de trastornos que afectan las habilidades comunicativas, la sociabilización y la empatía de la persona. Los autistas tienen una personalidad replegada sobre sí misma de manera patológica.',
    'La palabra bacteria proviene de un término griego que significa “bastón”. Se trata de un microorganismo unicelular procarionte que puede provocar enfermedades, fermentaciones o putrefacción en los seres vivos o materias orgánicas.',
    'El término bala proviene del francés balle. Por lo general se refiere a una munición o un proyectil hecho con un material sólido, como el plomo. Sin embargo, la palabra tiene diversos usos según el país.',
    'Un balón o pelota es una bola que suele utilizarse en diversos deportes y juegos. Suelen estar infladas con aire, por lo que son bastante livianas y pueden trasladarse o ser impulsadas con facilidad.',
    'Con origen etimológico en la lengua portuguesa, el término bambú alude a una planta que es nativa de la India y que pertenece al grupo familiar de las gramíneas. Sus tallos pueden alcanzar una altura de unos veinte metros, siendo utilizados para la producción de diferentes objetos gracias a su resistencia.',
    'El término latino capillus llegó a nuestro idioma como cabello. El concepto se emplea para nombrar al pelo: el filamento fino de origen córneo que se desarrolla en la piel de ciertos animales.',
    'El término cadena proviene del latín catēna y hace mención a una sucesión de eslabones que están unidos de alguna manera. Estos eslabones pueden ser de distintos materiales, como oro, plata u otros.',
    'Del latín científico calcium, el calcio es el elemento químico de número atómico 20 y símbolo Ca. Se trata de un metal de color blanco o gris, que suele encontrarse en forma de sulfato (como el yeso) o carbonato (la calcita) y que es muy abundante en la corteza de la Tierra.',
    'La noción de dado tiene varios usos. El término puede aludir al objeto poliédrico, por lo general cúbico, cuyas caras exhiben la representación de figuras o números. Estos elementos se emplean en numerosos juegos de azar.',
    'El término del inglés antiguo darodh llegó al francés como dard, que luego pasó al castellano como dardo. Se trata de un arma que se arroja con la mano de manera tal que su punta se clave en el objetivo.',
    'El término década podemos establecer que tiene su origen etimológico en el latín. De ahí que derive de “decada” que, a su vez, emana del griego “dekas”, que puede traducirse como “diez”.',
    'El término eclipse proviene del latín eclipsis, cuyo origen es un vocablo griego que significa “desaparición”. De todas formas, el uso del concepto no se refiere a una desaparición, sino a la ocultación transitoria, ya sea total o parcial, de un astro por la interposición de otro cuerpo celeste.',
    'El vocablo griego oídēma llegó al latín científico como oedema, que derivó en nuestra lengua en edema. El término se emplea en el ámbito de la medicina para referirse a la inflamación que provoca la presencia de un fluido en el tejido celular.',
    'El término eje, que viene del latín (axis o axe) posee múltiples usos, definiciones y aplicaciones. En sus orígenes representaba la barra que unía las ruedas de las carretas y, más adelante, la línea imaginaria que cruza el planeta Tierra de polo a polo.',
    'El primer paso que vamos a dar antes de conocer el significado del término fácil es descubrir su origen etimológico.',
    'Del latín facultas, la facultad es el poder, el derecho, la aptitud o la capacidad para hacer algo.',
    'Del latín fallita, una falta es la carencia o privación de algo.',
    'El origen etimológico del término gala se encuentra en el italiano “gala” que, a su vez, emana del francés, concretamente de la palabra “gale”, que puede traducirse como “diversión” o “fiesta”.',
    'La noción de galaxia tiene su origen en el latín galaxĭas que, a su vez, proviene de un término de origen griego.',
    'Con origen en el término latino habĭtus, hábito es un concepto con múltiples acepciones. Puede tratarse de la vestimenta o uniforme que un sujeto utiliza de acuerdo a su condición o estado.',
    'Lo primero que tenemos que establecer acerca del término hacker es su origen etimológico. En este caso, podemos indicar que se trata de un anglicismo que se emplea dentro del ámbito de la informática',
    'Un término griego derivó en el vocablo ruso ikona, que se transformó en el francés icône y, finalmente, se convirtió en icono o ícono en nuestro idioma',
    'Del latín idyllĭum, que tiene su origen en un vocablo griego que significa “poema breve”, el término idilio permite nombrar al coloquio amoroso y a las relaciones entre enamorados.',
    'El vocablo latino impostūra llegó a nuestro idioma como impostura. Así se denomina a la simulación o el artificio que se lleva a cabo con la apariencia de ser verdadero.',
    'Indicador es algo que indica o que sirve para indicar. Este verbo, por su parte, refiere a significar o mostrar algo con señales o indicios.',
    'Existen distintas teorías sobre el origen etimológico del término jabón. No obstante, una de las que cobra más fuerza establece que deriva del germánico “saipo”, que llegó al latín como “sapone” y de ahí nuestro actual jabón.',
    'El jefe es la cabeza de una organización. Se trata de una persona que se encuentra en el puesto superior de una jerarquía y que tiene las facultades necesarias para mandar a sus subordinados.',
    'lenguaje de programación orientado a objetos que se conoce como Java. El objetivo era utilizarlo en un set-top box, un tipo de dispositivo que se encarga de la recepción y la descodificación de la señal televisiva.',
    'El acrónimo JSON deriva de la expresión de la lengua inglesa JavaScript Object Notation, que puede traducirse como Notación de Objeto de JavaScript. Se trata de un formato de texto ligero que permite intercambiar datos.',
    'El vocablo griego kínēsis derivó en el inglés kinesic. Ese es el antecedente etimológico más cercano de kinésica, término que en nuestra lengua hace referencia a los movimientos del cuerpo, las posturas y la gestualidad que componen el lenguaje no verbal.',
    'concepto, hasta llegar a nuestra lengua, ha recorrido un largo trayecto: el vocablo de la lengua pelvi kōšk pasó al persa košk, luego arribó al turco como köşk y más tarde derivó en el francés kiosque.',
    'Un laboratorio es un lugar que se encuentra equipado con los medios necesarios para llevar a cabo experimentos, investigaciones o trabajos de carácter científico o técnico. En estos espacios, las condiciones ambientales se controlan y se normalizan para evitar que se produzcan influencias extrañas a las previstas, con la consecuente alteración de las mediciones, y para permitir que las pruebas sean repetibles.',
    'Una laja es una roca lisa y plana, de escaso grosor. Estas piedras suelen emplearse en enlosados y en tejados.',
    'Antes de entrar de lleno en el análisis del término lápiz que ahora nos ocupa, es importante que conozcamos su origen etimológico. En concreto, podemos establecer que emana del latín, y más exactamente de la palabra “lapis”, que puede traducirse como “piedra”.',
    'El término láser procede del inglés laser, que es un acrónimo surgido de la expresión Light Amplification by Stimulated Emission of Radiation. Esta expresión puede traducirse al castellano como Amplificación de Luz mediante Emisión Inducida de Radiación.',
    'Macro es un elemento compositivo que proviene de la lengua griega y que señala algo que es “grande”. Se trata, por lo tanto, de lo opuesto a micro (“pequeño”).',
    'La maestría es la habilidad y la pericia para realizar o enseñar algo. De acuerdo al contexto, el término se aplica de diferentes modos.',
    'Malbec es una clase de uva que se utiliza para la elaboración de vino. Al tratarse de una uva morada, con ella se produce vino tinto.',
    'El término microtúbulo procede del vocablo inglés microtubule. El concepto se forma con el elemento compositivo micro- (que alude a algo “muy pequeño”) y el sustantivo túbulo (un tubo pequeño que, en el ámbito de la anatomía, refiere a un conducto excretor).',
    'El término nardo tuvo un largo recorrido etimológico antes de llegar a nuestra lengua. El hebreo nērd derivó en el sánscrito nālada, que pasó al griego como nárdos y finalmente llegó al latín como nardus.',
    'Se denomina nitrito a la sal que se forma cuando el ácido nitroso se combina con una base. Para comprender el concepto con precisión, por lo tanto, primero es necesario tener en claro varias nociones.',
    'Del latín nodus, el término nodo tiene distintos usos en los campos de la astronomía, la física y la informática.',
    'Del latín nullus, nulo es un adjetivo que refiere a algo falto de fuerza o valor para tener efecto. Lo nulo puede resultar contrario a la ley o carecer de los requisitos vinculados al modo o la sustancia.',
    'Lo primero que tenemos que hacer antes de entrar de lleno en el análisis del significado del término obra es proceder a determinar su origen etimológico.',
    'Se conoce como ocaso (que deriva del latín occāsus) al momento en el que el sol atraviesa la línea del horizonte y desaparece de nuestra vista. Como suele decirse que el sol siempre se pone por el oeste (aunque esto no es exacto desde el punto de vista astronómico), la noción de ocaso también se utiliza para nombrar a este punto cardinal.',
    'Oda es una palabra latina con origen griego que hace referencia a una composición poética del género lírico. La oda puede ser desarrollada en diversos tonos y formas, y tratar asuntos de cualquier índole. Por lo general, suele dividirse en estrofas o partes iguales.',
    'Ópera proviene de la lengua italiana y hace referencia a la obra teatral cuyo texto se canta con acompañamiento de una orquesta. ',
    'Pacto, del latín pactum, es un acuerdo, alianza, trato o compromiso cuyos involucrados aceptan respetar aquello que estipulan. ',
    'Un palacio es una construcción destinada a funcionar como vivienda de un rey, un gobernante o una persona de gran riqueza. ',
    'Quartz es un término inglés que se emplea para nombrar al cuarzo, un mineral que se encuentra formado por óxido de silicio (compuesto también conocido como sílice). ',
    'Quicio es un concepto con diferentes acepciones. De acuerdo a lo especificado por la Real Academia Española (RAE) a través de su diccionario, se trata de la parte de una ventana o de una puerta que ingresa en un sector específico para que se pueda mover, girar, abrir o cerrar, al igual que actúan los goznes, los pernios o las bisagras.',
    'Antes de entrar de lleno en el establecimiento del significado del término rabino, se hace necesario conocer su origen etimológico. ',
    'El vocablo latino sacchărum llegó a nuestra lengua como sacarosa. Se trata de un término que puede utilizarse como sinónimo del azúcar común (un hidrato de carbono de sabor dulce y color blanco que puede disolverse en agua).',
    'Tabú es un término polinesio que significa “lo prohibido”. El concepto permite mencionar las conductas o acciones que están prohibidas o censuradas por un grupo humano debido a cuestiones culturales, sociales o religiosas.',
);
//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar() {
    //Creando el controlador de evento para el evento
    //doble clic sobre los elementos del cuadro de lista
    var lista = document.getElementById("lstsports");

    //Cargando los datos en el cuadro de lista al cargar la página
    cargarLista();
    if (lista.addEventListener) {
        lista.addEventListener("dblclick", function () {
            cargarTexto(this.options[this.selectedIndex].text);
        }, false);
        
    }
    else if (lista.attachEvent) {
        lista.attachEvent("ondblclick", function () {
            cargarTexto(this.options[this.selectedIndex].text);
        });
    }

    //Capturando el campo de texto sobre el que se ingresan los deportes
    //mediante pulsasión de tecla
    var texto = document.getElementById("txtsport");// dos
    if (texto.addEventListener) {
        texto.addEventListener("keyup", buscar, false);
    }
    else if (texto.attachEvent) {
        texto.attachEvent("onkeyup", buscar);
    }
}
function cargarLista() {
    // Cargamos el combo
    for (x = 0; x < lista.length; x++) {
            document.frmsearchsport.lstsports[x] = new Option(lista[x]);
    }

}
function cargarTexto(elemento) {
    if (elemento != null && elemento != undefined && elemento != ""){
        document.frmsearchsport.txtsport.value = elemento;//3
        let pos = lista.indexOf(elemento);
        let vale;              
        for(vale=pos; vale<lista2.length; vale++){
            document.getElementById("lstdefinicion").innerHTML = lista2[vale];

            document.getElementById('lstdefinicion')=lista2[vale];
            document.write(lista2[vale]); 
            document.querySelector('.lstdefinicion') =  lista2[vale];
                        document.frmsearchsport.lstdefinicion = lista2[vale];//3

        }
    }

    
    
}
function buscar() {
    limpiarLista();
    // Se obtiene el valor del texto
    var str = document.frmsearchsport.txtsport.value;//1
    // Crear la expresión regular
    var expr = new RegExp("^" + str, "i");
    // Recorrer la lista. Si la expresión regular es OK
    y = 0;
    for (x = 0; x < lista.length; x++) {

        if (expr.test(lista[x])) {
            document.frmsearchsport.lstsports[y] = new Option(lista[x]);
            document.frmsearchsport.lstdefinicion[y] =lista2[x];
            y++;
        }
    }

}
function limpiarLista() {
    for (x = document.frmsearchsport.lstsports.length; x >= 0; x--)
        document.frmsearchsport.lstsports[x] = null;
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}
