import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './site/about/about.module';
import { ErrorsModule } from './site/errors/errors.module';
import { FilmsModule } from './site/films/films.module';
import { HomeModule } from './site/home/home.module';
import { NavmenuComponent } from './site/shared/navmenu/navmenu.component';
import { SharedModule } from './site/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    FilmsModule,
    HomeModule,
    SharedModule,
    ErrorsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
