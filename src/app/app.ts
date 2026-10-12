import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from './cabecera/cabecera';
import { ListaCompra } from './lista-compra/lista-compra';

@Component({
  imports: [RouterOutlet, Cabecera, ListaCompra],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyecto-S7CaD');
}
