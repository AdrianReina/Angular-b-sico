import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'Superman', 'Thor', 'Hulk'];
  heroeBorrado: string = '';

  constructor() {}

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
