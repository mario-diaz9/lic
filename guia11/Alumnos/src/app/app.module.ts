import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
//agregar modulo de formulario
import{FormsModule} from '@angular/forms';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }