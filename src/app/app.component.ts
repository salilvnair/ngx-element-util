import { Component, OnInit } from '@angular/core';
import { NgxElement } from '../../projects/ngx-element-util/src/lib/ngx-element';
import { Hello } from './test/hello.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ngxElement:NgxElement){}
  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.ngxElement.selector('app-test').attr('data'));
    },2000)

  }
  hello:Hello = {a:'A',text:'hello'};
  title = 'ngx-element-util-lib';
}
