import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'util';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MemoryBox';



  constructor(){

  }

}
