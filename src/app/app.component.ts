import { Component } from '@angular/core';
import { Promise, resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = 'Rodrigo';
  arreglo:number [] = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  a:number = 0.2354;
  moneda:number = 123.4;
  persona:any = {
    nombre: "Rodrigo",
    clave: 151807,
    edad: 20,
    direccion:{
      calle: "Insurgentes",
      numero: "1678",
      colonia: "Lindavista"
    }
  };
  fecha = new Date();
  nombre2 = "juAn rOdrIgo martInEZ pLasCenciA";
}
