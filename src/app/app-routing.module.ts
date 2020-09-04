import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ActorComponent } from './actor/actor.component';
const routes: Routes = [
  {path: 'repertuar', component: RepertuarComponent},
  {path: 'priceList', component: PriceListComponent},
  {path: 'actors', component: ActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

