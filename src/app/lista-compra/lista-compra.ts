import { Component,OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lista-compra',
  styleUrl: './lista-compra.css',
  templateUrl: './lista-compra.html',
})
export class ListaCompra implements OnInit {

  arrayProductos: { nombreProducto: string }[] = [
    {
      nombreProducto: 'leche',
    },
    {
      nombreProducto: 'pan',
    }
  ];

  maxProductos: number = 5;

  nuevoProducto: string = '';
  maxCaracteres: number = 20;

  onCambio(evento: Event): void {
    const input = evento.target as HTMLInputElement;
    this.nuevoProducto = input.value;
  }

  mostrarProductos(): string {
  let resultado: string = '';

  for (let i = 0; i < this.arrayProductos.length; i++) {
    resultado += this.arrayProductos[i].nombreProducto + " · " ;

  
  }

  return resultado;
}
  addProducto(): void {
    if(this.nuevoProducto.trim() !== '' && this.arrayProductos.length < this.maxProductos) {
      this.arrayProductos.push({ nombreProducto: this.nuevoProducto });
      this.nuevoProducto = '';
    }

  }

  estaVacia(): boolean {
    return this.arrayProductos.length === 0;
  }

  vaciarLista(event: MouseEvent): void {
    if(event.shiftKey) {
      this.arrayProductos = [];
    }
  }

  ngOnInit(): void {
  console.log('Número inicial de productos:', this.arrayProductos.length);
  }
    
}