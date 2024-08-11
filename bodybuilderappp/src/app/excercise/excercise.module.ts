import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExcercisePage } from './excercise.page';
import { ExcercisePageRoutingModule } from './excercise-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcercisePageRoutingModule
  ],
  declarations: [ExcercisePage]
  
})
export class ExcercisePageModule {}
