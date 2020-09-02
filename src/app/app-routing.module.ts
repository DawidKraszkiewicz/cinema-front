import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { PriceListComponent } from './price-list/price-list.component';

const routes: Routes = [
  {path: 'repertuar', component: RepertuarComponent},
  {path: 'priceList', component: PriceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
