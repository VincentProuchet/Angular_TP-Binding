import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { SearchformComponent } from './searchform/searchform.component';
import { SearchmovieService } from './services/searchmovie.service';
import { HttpClientModule } from "@angular/common/http";
import { ListDirective } from './directives/list.directive';
const routes: Routes = [
  {
    path: 'films', component: FilmsComponent
  }
];


@NgModule({
  declarations: [
    FilmsComponent,
    SearchformComponent,
    ListDirective,

  ],
  providers: [
    SearchmovieService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
