import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData:string = 'hello';
  imageFolder: string = ' http://media.mw.metropolia.fi/wbma/uploads';
  imgUrl:string =  'https://www.pexels.com/photo/pet-eyes-looking-cat-88494/';

  constructor(private http:HttpClient) { }


  getJSON() {
    interface ItemsResponse {
      license: string;
    }

      this.http.get<ItemsResponse>('assets/package.json').subscribe((response => {
        console.log(response);
        this.someData = response.license;
      })
    );
  }

  getMedia(){
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((res: Response) => this.imgUrl = JSON.stringify(res));
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }
}
