import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro = [];
  sueldos: any;
  nombre: string;
  base: number;
  isss:number;
  renta:number;
  afp:number;
  neto: number;
  contador: number;
  constructor() { }
  ngOnInit() {
    this.nombre = '';
    this.base = 0;
    this.neto = 0;
    this.contador = 0;
    this.isss=0;
    this.renta=0;
    this.afp=0;
  }
  ingresar() {
    this.isss= this.base * 0.074;
    this.renta= this.base * 0.11;
    this.afp= this.base * 0.051;
    this.neto = this.base - (this.isss + this.renta + this.afp);
    this.sueldos = { "nombre": this.nombre, "base": this.base,"isss": this.isss,"renta": this.renta,"afp": this.afp, "neto": this.neto };
    this.registro.push(this.sueldos);
    this.contador++;
  }
}