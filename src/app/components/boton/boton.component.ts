import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
})
export class BotonComponent implements OnInit {

  @Input() icono:string="";
  @Input() turno:number=0;

  constructor() { }

  ngOnInit() {
    
  }

  MyEvento(){
    
    if(this.turno==1)
    {
      this.icono="close";
     
    }
    else
    {
      this.icono="ellipse-outline";
     
    }
  }




}
