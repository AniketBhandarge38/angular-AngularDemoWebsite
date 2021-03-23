import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Childcomp1Component } from "./childcomp1/childcomp1.component";
import { HttpdemoComponent } from "./httpdemo/httpdemo.component";

const routes: Routes = [
  { path: "databiding", component: Childcomp1Component },
  { path: "http", component: HttpdemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
