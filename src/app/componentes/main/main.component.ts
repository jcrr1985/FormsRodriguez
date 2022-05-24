import { FormGroup, FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie';
import { DatosCompartidosService } from 'src/app/servicios/datos-compartidos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public serieSeleccionada!: string;
  public mostrarModalFinal: boolean = true;
  public forma!: FormGroup;
  constructor(private datosCompartidosService: DatosCompartidosService, private fb: FormBuilder
  ) {
    this.datosCompartidosService.serieSeleccionada$.subscribe(serieSeleccionada => {
      this.serieSeleccionada = serieSeleccionada;
    });
  }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.forma = this.fb.group({
      email: ['', Validators.required],
      pass:  ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onsubmit(): void {
    this.cerrarModal()
  }


  cerrarModal() {
    let cerrar = document.getElementById('cerrar--modal');
    let modal = document.getElementById("modal-pantalla-final");
    if (cerrar) {
      cerrar.addEventListener("click", (() => {
        
        modal!.style.display = "none";
        console.log('click', "click")
 
      }))
    }

  }
}
