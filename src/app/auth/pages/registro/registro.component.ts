import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal




  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required,]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jorge Z',
      email: 'test@gmail.com',
      username: 'jzevallos17'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched()
    
  }

}
