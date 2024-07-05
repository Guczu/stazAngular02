import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ListComponent } from './list/list.component';
import { DataTypePipe } from './pipes/data-type.pipe';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListRowComponent } from './list-row/list-row.component';
import { ListCellComponent } from './list-cell/list-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DataTypePipe,
    ListComponent,
    ListHeaderComponent,
    ListRowComponent,
    ListCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
