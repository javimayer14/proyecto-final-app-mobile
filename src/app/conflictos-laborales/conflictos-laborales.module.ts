import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConflictosLaboralesPage } from './conflictos-laborales.page';

const routes: Routes = [
  {
    path: '',
    component: ConflictosLaboralesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConflictosLaboralesPage]
})
export class ConflictosLaboralesPageModule {}
