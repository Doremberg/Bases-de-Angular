import { Component} from '@angular/core';
import { Personaje } from '../interfaces/interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
 
  // agregarNuevoPersonaje(personaje: Personaje){
  //     this.personajes.push(personaje);
  // }

  // constructor(private DbzService: DbzService){

  // }

  constructor(){}

}
