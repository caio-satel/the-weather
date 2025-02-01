import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaHomeComponent } from './modules/clima/page/clima-home/clima-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clima',
    pathMatch: 'full'
  },
  {
    path: 'clima',
    component: ClimaHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
