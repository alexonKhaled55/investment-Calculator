import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { Investment } from './investment/investment.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, Investment],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
