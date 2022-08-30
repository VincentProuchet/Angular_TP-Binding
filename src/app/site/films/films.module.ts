import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { SearchformComponent } from './searchform/searchform.component';

const routes: Routes = [
  {
    path: 'films', component: FilmsComponent
  }
];


@NgModule({
  declarations: [
    FilmsComponent,
    SearchformComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmsModule { }
