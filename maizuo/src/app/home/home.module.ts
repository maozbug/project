import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
//import { DatetimesPipe } from './datetimes.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilmsComponent],
  exports :[FilmsComponent]
})
export class HomeModule { }
