import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  turno:number=1;
  icon:string;
  lista:any=[0,0,0,0,0,0,0,0,0];
  ganador:string;
  constructor() { }

  ngOnInit() {
  }

  cambiar(id,simbolo,icono)
  {
    document.getElementById('ico'+id).setAttribute('name',icono);
    document.getElementById(id).setAttribute('disabled','true');
    this.lista[id]=simbolo; 
  }

  jugada(ev)
  {
    if(this.turno==1)
    {
      this.icon='close';
      this.cambiar(ev.srcElement.id,'x',this.icon);
      this.turno=2;
    }
    else
    {
      this.icon='ellipse-outline';
      this.cambiar(ev.srcElement.id,'o',this.icon);
      this.turno=1;
    }
    console.log(this.lista);
    this.verwinner();
  }
  verwinner(){
    if(this.lista[0]=='x' && this.lista[1]=='x' && this.lista[2]=='x' )
    {
      this.ganador="Jugador 1 wins";
    }
  }

}
