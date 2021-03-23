import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-childcomp1",
  templateUrl: "./childcomp1.component.html",
  styleUrls: ["./childcomp1.component.css"]
})
export class Childcomp1Component implements OnInit {
  name: string = "Aniket";
  disvar: boolean = true;

  constructor() {}
  evnt() {
    alert("Event triggered!!!");
  }
  ngOnInit() {}
}
