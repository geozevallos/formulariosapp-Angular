import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Q elemento estoy buscnado
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10 
  }

  constructor() { }

  ngOnInit(): void {
  }

  // guardar(miFormulario: NgForm){
  //   console.log(miFormulario.value);
  // }
  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid &&
    this.miFormulario?.controls.producto?.touched
    
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.touched && 
    this.miFormulario?.controls.precio?.value < 0

  }

  guardar(){
    // console.log(this.miFormulario.controls.precio.value);
    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }


}
