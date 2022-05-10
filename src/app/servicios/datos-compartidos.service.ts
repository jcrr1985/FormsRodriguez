import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Serie } from '../interfaces/serie';

@Injectable({
  providedIn: 'root'
})
export class DatosCompartidosService {

  public serieSeleccionada: BehaviorSubject<any> = new BehaviorSubject('x');
  public serieSeleccionada$ = this.serieSeleccionada.asObservable();
  public serieIndex!: number;

  get getSerieObject(){
    return this.seriesDataArray[this.serieIndex]
  }

  public seriesDataArray: Serie[] = [
    {
      nombre: 'Berserk',
      info: 'Berserk es un manga creado por Kentaro Miura y posteriormente adaptado en anime, con un estilo épico fantástico y de fantasía oscura.',
      fondo: './../../../assets/imagenes/fondos/berserk.jpg'
    },
    {
      nombre: 'Ergo Proxy',
      info: 'Humanos y androides aparentan vivir en armonía en la última ciudad existente sobre el planeta. Pero todo cambia cuando la inspectora Re-L Mayer comienza a perseguir a un monstruo conocido como Ergo Proxy.',
      fondo: './../../../assets/imagenes/fondos/ergo.jpg'
    },
    {
      nombre: 'Ruruouni Kenshin',
      info: 'Rurōni Kenshin: Meiji Kenkaku Romantan literalmente "Rurōuni Kenshin: El espadachín vagabundo —de la era— Meiji", conocido en España como Kenshin, el guerrero samurái y en Hispanoamérica como Samurái X, es un manga escrito e ilustrado por Nobuhiro Watsuki y cuya adaptación al anime fue dirigida por Kazuhiro Furuhashi.',
      fondo: './../../../assets/imagenes/fondos/kenshin.jpg'
    },
    {
      nombre: 'Lain Serial Experiments',
      info: 'Lain es un anime vanguardista, influenciado por temas filosóficos como realidad, identidad y comunicación social. La serie se centra en Lain Iwakura, una chica que vive su adolescencia en los suburbios de Japón; y sobre su introducción al Wired, una red mundial de comunicaciones similar a Internet.',
      fondo: './../../../assets/imagenes/fondos/lain.jpg'
    },
    {
      nombre: 'Berserk',
      info: 'En 2071, tras el éxodo de los humanos por todos los planetas, hay un gran caos en el universo, dejando vía libre para todo tipo de criminales. Así aparece la tripulación de la nave BEBOP que son cazarrecompensas. En BEBOP viajan Spike Spiegel y Jet Black, Faye Valentine, Ed y, la mascota, Ein.',
      fondo: './../../../assets/imagenes/fondos/berserk.jpg'
    }
  ]

  constructor() { }
}
