import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cabecera',
  styleUrl: './cabecera.css',
  templateUrl: './cabecera.html',
})
export class Cabecera {
  textoCabecera: string = 'Lista de la compra';
  textoInferior: string = 'Productos disponibles';
}
