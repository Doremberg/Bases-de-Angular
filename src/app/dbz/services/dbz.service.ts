import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/interfaces';


@Injectable()

export class DbzService{
    private _personajes: Personaje[] = [ //Por estandarización, los private empiezan con _
        {
          nombre: 'Goku',
          poder: 10000
        },
        {
          nombre: 'Vegetta',
          poder: 7000
        },
        {
          nombre: 'Trunks',
          poder: 30000
        }
      ];

      get personajes() : Personaje[]
      {
        return [...this._personajes]; //[... ] Es un arreglo
      }
 constructor(){}

 agregarNuevoPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
}

 
}