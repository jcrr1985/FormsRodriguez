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

  constructor( private datosCompartidosService: DatosCompartidosService ) {
    this.datosCompartidosService.serieSeleccionada$.subscribe( serieSeleccionada => {
      this.serieSeleccionada = serieSeleccionada;
    });
  }

  ngOnInit(): void {
    console.log('this.serieSeleccionada', this.serieSeleccionada)
  }



}
