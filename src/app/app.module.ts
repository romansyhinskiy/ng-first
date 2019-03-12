import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilmsComponent } from './components/films/films.component';
import { BooksComponent } from './components/books/books.component';
import { SongsComponent } from './components/songs/songs.component';
import { GoalsComponent } from './components/goals/goals.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {TestServiceService} from "./test-service.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FilmsComponent,
    BooksComponent,
    SongsComponent,
    GoalsComponent,
    MainPageComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
