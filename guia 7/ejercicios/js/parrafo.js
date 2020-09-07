function init() {
    var btnenabled = document.getElementById("enabled");
    var btndisabled = document.getElementById("disabled");
    var btnsize = document.getElementById("size");
    var btncolor = document.getElementById("color");
    var btnposicion = document.getElementById("posicion");
    //Implementación del botón Habilitar reglas de estilo
    if (btnenabled.addEventListener) {
        btnenabled.addEventListener("click", function () {
            document.styleSheets[0].disabled = false;
        }, false);
    }
    else if (btnenabled.attachEvent) {
        btnenabled.attachEvent("onclick", function () {
            document.styleSheets[0].disabled = false;
        });
    }
    //Implementación del botón deshabilitar reglas de estilo
    if (btndisabled.addEventListener) {
        btndisabled.addEventListener("click", function () {
            document.styleSheets[0].disabled = true;
        }, false);
    }
    else if (btndisabled.attachEvent) {
        btndisabled.attachEvent("onclick", function () {
            document.styleSheets[0].disabled = true;
        });
    }
    //tamano de la letra
    if (btnenabled.addEventListener) {
        btnenabled.addEventListener("click", function () {
            document.styleSheets[0].disabled = false;
        }, false);
    }
    else if (btnenabled.attachEvent) {
        btnenabled.attachEvent("onclick", function () {
            document.styleSheets[0].disabled = false;
        });
    }

}
function modifyRule() {
    var styleSheet = document.styleSheets[0];
    if (styleSheet.rules) {
        styleSheet.cssRules = styleSheet.rules;
    }
    if (styleSheet.cssRules[0]) {
        styleSheet.cssRules[0].style.color = 'purple';
        styleSheet.cssRules[0].style.fontSize = '30pt';
        styleSheet.cssRules[0].style.backgroundColor = 'gold';
    }
}
function deleteRule() {
    var styleSheet = document.styleSheets[0];
    if (styleSheet.rules) {
        styleSheet.cssRules = styleSheet.rules;
    }
    if (styleSheet.cssRules.length > 0) {
        if (styleSheet.removeRule)
            styleSheet.removeRule(0);
        else if (styleSheet.deleteRule)
            styleSheet.deletRule(0);
    }
}
function addRule() {
    var styleSheet = document.styleSheets[0];
    /* if(styleSheet.addRule){
    styleSheet.addRule("h3","{text-align:center; font-family:\"Century Gothic\"; fontsize:18pt; color:Brown;}",4);
    }
    else if(styleSheet.insertRule){
    styleSheet.insertRule("h3 {text-align:center; font-family:\"Century Gothic\";
   font-size:18pt; color:Brown;}",4);
    } */
    if ("insertRule" in styleSheet) {
        styleSheet.insertRule('h3 {text-align:center; font-family:"Century Gothic"; fontsize:18pt; color:Brown;}', 4);
    }
    else if ("addRule" in styleSheet) {
        styleSheet.addRule('h3', 'text-align:center; font-family:"Century Gothic"; fontsize:18pt; color:Brown;', 4);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init);
}