import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-httpdemo",
  templateUrl: "./httpdemo.component.html",
  styleUrls: ["./httpdemo.component.css"]
})
export class HttpdemoComponent implements OnInit {
  title = "image-gallary";
  private data: any = [];
  constructor(private http: HttpClient) {}

  getdata() {
    const url = "https://jsonplaceholder.typicode.com/photos?albumId=1";
    this.http.get(url).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  ngOnInit() {}
}
