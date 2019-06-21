import { Component, OnInit } from '@angular/core';
import { NgxElement } from '../../projects/ngx-element-util/src/lib/ngx-element';
import { Hello } from './test/hello.model';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ngxElement:NgxElement){}
  ngOnInit(): void {
    setTimeout(()=>{
      this.ngxElement.selector(TestComponent).attr('hello',this.hello)
      console.log(this.ngxElement.selector(TestComponent).attr<Hello>('hello').text);
    },2000)

  }
  hello:Hello = { a:'A', text:'Hello there!' };
  title = 'ngx-element-util-lib';
}
