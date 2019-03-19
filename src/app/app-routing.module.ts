import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'altas', loadChildren: './VariacionesEnEmpleo/altas/altas.module#AltasPageModule' },
  { path: 'bajas', loadChildren: './VariacionesEnEmpleo/bajas/bajas.module#BajasPageModule' },
  { path: 'suspenciones', loadChildren: './VariacionesEnEmpleo/suspenciones/suspenciones.module#SuspencionesPageModule' },
  { path: 'conflictos-laborales', loadChildren: './conflictos-laborales/conflictos-laborales.module#ConflictosLaboralesPageModule' },
  { path: 'cambio-condiciones-laborales', loadChildren: './cambio-condiciones-laborales/cambio-condiciones-laborales.module#CambioCondicionesLaboralesPageModule' },
  { path: 'pagina-principal', loadChildren: './pagina-principal/pagina-principal.module#PaginaPrincipalPageModule' }
];
@NgModule({
  imports: [
    HttpClientModule,

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
