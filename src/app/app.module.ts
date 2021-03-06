import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RepertuarComponent } from './repertuar/repertuar.component';
import { PriceListComponent } from './price-list/price-list.component';
import { MatIconModule, MatIcon} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { ActorComponent } from './actor/actor.component';
import { HttpClientModule} from '@angular/common/http';
import { RepertuarService } from './repertuar/shared/repertuar.service';
import { MatCardModule } from '@angular/material/card';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FilmComponent } from './film/film.component';
import { BookingComponent } from './booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    RepertuarComponent,
    PriceListComponent,
    ActorComponent,
    FilmComponent,
    BookingComponent,

  ],
  imports: [
    NgxYoutubePlayerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatCardModule,
    MatNativeDateModule,

  ],
  providers: [ { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
              RepertuarService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
