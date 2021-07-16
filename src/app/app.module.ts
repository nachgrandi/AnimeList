import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './body/home/home.component';
import { AnimeListComponent } from './body/anime-list/anime-list.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AddAnimeComponent } from './body/add-anime/add-anime.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CardAnimeComponent } from './components/card-anime/card-anime.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnimeCardSearchComponent } from './header/anime-card-search/anime-card-search.component';
import { ToastErrorComponent } from './components/toast-error/toast-error.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { MatInputModule } from '@angular/material/input';
import { ModalCreateUserComponent } from './modals/modal-create-user/modal-create-user.component';
import { GuardPageService } from './services/pageGuardService';
import { UnauthorizedComponent } from './body/unauthorized/unauthorized.component';
import { InterceptorService } from './services/interceptor';
import { ImgPromotionComponent } from './components/img-promotion/img-promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AnimeListComponent,
    BreadcrumbComponent,
    AddAnimeComponent,
    CardAnimeComponent,
    AnimeCardSearchComponent,
    ToastErrorComponent,
    ModalLoginComponent,
    ModalCreateUserComponent,
    UnauthorizedComponent,
    ImgPromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    DatePickerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [
    HttpClientModule,
    GuardPageService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
