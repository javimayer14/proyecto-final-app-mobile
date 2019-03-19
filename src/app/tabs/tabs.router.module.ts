import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AltasPage } from '../VariacionesEnEmpleo/altas/altas.page';

const routes: Routes = [
  {
    
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          },
          {
            path: 'altas',
            loadChildren: '../VariacionesEnEmpleo/altas/altas.module#AltasPageModule'
          },
          {
            path: 'bajas',
            loadChildren: '../VariacionesEnEmpleo/bajas/bajas.module#BajasPageModule'
          },
          {
            path: 'suspenciones',
            loadChildren: '../VariacionesEnEmpleo/suspenciones/suspenciones.module#SuspencionesPageModule'
            
          }
        ]
      },
      {
        path: 'cambio-condiciones-laborales',
        children: [
          {
            path: '',
            loadChildren: '../cambio-condiciones-laborales/cambio-condiciones-laborales.module#CambioCondicionesLaboralesPageModule'
          }
        ]
      },
      {
        path: 'conflictos-laborales',
        children: [
          {
            path: '',
            loadChildren: '../conflictos-laborales/conflictos-laborales.module#ConflictosLaboralesPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
