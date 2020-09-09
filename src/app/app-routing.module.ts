import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ActorComponent } from './actor/actor.component';
import { FilmComponent } from './film/film.component';
const routes: Routes = [
  {path: 'repertuar', component: RepertuarComponent},
  {path: 'repertuar/film/:id', component: FilmComponent},
  {path: 'priceList', component: PriceListComponent},
  {path: 'actors', component: ActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

