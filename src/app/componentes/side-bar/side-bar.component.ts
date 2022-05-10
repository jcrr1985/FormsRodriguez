import { Component, OnInit } from '@angular/core';
import { DatosCompartidosService } from 'src/app/servicios/datos-compartidos.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private datosCompartidosService: DatosCompartidosService) { }

  ngOnInit(): void {
  }

  verResumen(serie: string, index:number){
    this.datosCompartidosService.serieSeleccionada.next(serie);
    this.datosCompartidosService.serieIndex = index ;
  }

}
