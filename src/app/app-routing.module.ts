import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmsComponent} from "./components/films/films.component";
import {BooksComponent} from "./components/books/books.component";
import {SongsComponent} from "./components/songs/songs.component";
import {GoalsComponent} from "./components/goals/goals.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {TodoComponent} from "./components/todo/todo.component";

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'films', component: FilmsComponent},
  {path: 'books', component: BooksComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'goals', component: GoalsComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'todo', component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
