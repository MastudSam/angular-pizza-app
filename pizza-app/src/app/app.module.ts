import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule
  ],
  exports: [ AppMaterialModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
