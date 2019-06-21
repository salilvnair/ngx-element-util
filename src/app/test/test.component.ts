import { Component, OnInit, Input } from '@angular/core';
import { Hello } from './hello.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  data: Hello;
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
