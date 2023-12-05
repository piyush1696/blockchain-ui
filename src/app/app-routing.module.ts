import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthereumComponent, MetamaskComponent } from './pages';

const routes: Routes = [
  {
    path: 'ethereum',
    component: EthereumComponent,
    children: [
      { path: 'metamask', component: MetamaskComponent },
    ]
  },
  { path: '**', redirectTo: 'ethereum' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
