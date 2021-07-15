import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class Dbzservice {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 8500,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Soy el servicio');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
