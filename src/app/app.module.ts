import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { CellComponent } from './cell/cell.component';
import { HeaderComponent } from './header/header.component';
import { LuckycellComponent } from './components/luckycell/luckycell.component';
import { LuckycalendarComponent } from './luckycalendar/luckycalendar.component';
import { LuckyheaderComponent } from './luckyheader/luckyheader.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    CellComponent,
    HeaderComponent,
    LuckycellComponent,
    LuckycalendarComponent,
    LuckyheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
