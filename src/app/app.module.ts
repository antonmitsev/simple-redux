import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appStoreProviders } from './app.store';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ appStoreProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
