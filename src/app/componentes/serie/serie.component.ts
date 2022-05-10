import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie';
import { DatosCompartidosService } from 'src/app/servicios/datos-compartidos.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit, OnChanges {

  @Input() serieSeleccionada: any;
  public serieObject: any;
  public titulo: any;
  public info: any;
  constructor(private datosCompartidosService: DatosCompartidosService) { }

  ngOnInit(): void {
    console.log('serieSeleccionada', this.serieSeleccionada)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.serieSeleccionada = changes['serieSeleccionada']['currentValue']
    console.log('changes:', this.serieSeleccionada)
    this.serieObject = changes['serieSeleccionada']
    console.log('this.serieObject', this.serieObject);
    this.serieObject = this.datosCompartidosService.getSerieObject;
    this.titulo = this.serieObject.nombre;
    this.info = this.serieObject.info;

    console.log('this.serieObject', this.serieObject)
  }



}
