import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { HomeModule } from './home/home.module';

import { ScrlistService } from './commons/scrlist.service';
import { ListsService } from './home/lists.service';
import { AppComponent } from './app.component';
import { DatetimesPipe } from './datetimes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatetimesPipe
  ],
  imports: [
    BrowserModule,CommonsModule,HomeModule
  ],
  providers: [ScrlistService,ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
