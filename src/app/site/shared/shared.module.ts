import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavmenuComponent } from './navmenu/navmenu.component';



@NgModule({
  declarations: [NavmenuComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    NavmenuComponent
  ]
})
export class SharedModule { }
