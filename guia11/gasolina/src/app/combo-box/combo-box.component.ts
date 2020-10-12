import { Component, OnInit } from '@angular/core';
//Agregar las siguientes modulos
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
@Component({
    selector: 'app-combo-box',
    templateUrl: './combo-box.component.html',
    styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
    //crear las siguientes variables
    unidades;
    opcionSeleccionado: string;
    valorcm: number;
    resultado: string;
    constructor() {
    }
    ngOnInit() {
        //inicializar las variables
        this.unidades = ["Especial", "Regular", "Diesel"];
        this.opcionSeleccionado = "Selecciona";
        this.valorcm = 0.05;

        this.resultado = '';
    }
    //funcion que realiza los calculos
    capturar() {
        switch (this.opcionSeleccionado) {
            case 'Especial':
                this.resultado = (this.valorcm * 4.25).toFixed(2);
                break;
            case 'Regular':
                this.resultado = (this.valorcm * 4.05).toFixed(2);
                 break;
            case 'Diesel':
                this.resultado=(this.valorcm*3.96).toFixed(2);
                break;
        }
    }
}
export class AppComponent {
}