import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthComponent } from './auth/auth.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { authServices } from './services/auth.services';
import { authGuard } from './services/guard.services';
import { FormsModule } from '@angular/forms';
import { BookService } from './services/books.services';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'books', canActivate: [authGuard], component: BooksComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'book/:id', canActivate: [authGuard], component: ViewBookComponent },
  { path: 'newbook', canActivate: [authGuard], component : NewBookComponent },
  { path: '', canActivate: [authGuard], component : BooksComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BooksComponent,
    BookComponent,
    AuthComponent,
    ViewBookComponent,
    NewBookComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    authServices,
    authGuard,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
