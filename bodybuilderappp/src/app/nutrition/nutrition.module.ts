import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritionPageRoutingModule } from './nutrition-routing.module';

import { NutritionPage } from './nutrition.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NutritionPage]
})
export class NutritionPageModule {}
