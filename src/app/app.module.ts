import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Childcomp1Component } from "./childcomp1/childcomp1.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpdemoComponent } from './httpdemo/httpdemo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [AppComponent, Childcomp1Component, HttpdemoComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
