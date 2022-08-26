import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [BotonComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[BotonComponent]
})
export class ComponentsModule { }
