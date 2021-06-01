import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevojuego: string = "";

  persona: Persona = {
    nombre: 'Jorge',
    favoritos: [
      { id: 1, nombre: "PES 2021" },
      { id: 2, nombre: "The Last of Us" }
    ]
  }


  guardar() {
    console.log("Formulario posteado");

  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego(){
    const nuevoFavorito: Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevojuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevojuego = '';
  }

}
