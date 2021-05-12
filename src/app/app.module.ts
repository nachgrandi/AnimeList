import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CardAnimeComponent } from './card-anime/card-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AnimeListComponent,
    BreadcrumbComponent,
    AddAnimeComponent,
    CardAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
