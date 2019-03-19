import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CambioCondicionesLaboralesPage } from './cambio-condiciones-laborales.page';

const routes: Routes = [
  {
    path: '',
    component: CambioCondicionesLaboralesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CambioCondicionesLaboralesPage]
})
export class CambioCondicionesLaboralesPageModule {}
