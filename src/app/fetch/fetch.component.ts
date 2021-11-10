import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  li: any;
  list :any [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(Response=> {
      if(Response){
        hideLoader();
      }
      console.log(Response);
      this.li=Response;
      this.list = this.li.list;
    });

   function hideLoader() {
      document.getElementById('loading')?.style.display =="none";
     }
   }
}
