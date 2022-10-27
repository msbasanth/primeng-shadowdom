import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { PtableWrapperComponent } from './ptable-wrapper/ptable-wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    PtableWrapperComponent
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
