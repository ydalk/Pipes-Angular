import { Component } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Capitan América";
  nombre2: string = "caRoLina pORRas gOnZaLeZ";
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'fr';
  videoUrl: string = "https://www.youtube.com/embed/RAh5xtdIVkA";
  activar: boolean = true;


  heroe = {
    nombre: 'Logan',
    calve: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }


  }

  valorPromesa = new Promise<string>((resolve) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

}
