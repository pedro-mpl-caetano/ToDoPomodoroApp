import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  //@Output() generateOrder = new EventEmitter<number>();

  nb : number;

  constructor() { }

  numberGen1(n : number){
    //this.generateOrder.emit(2);
    //console.log("This button works!" + generateOrder);
    console.log("number = " + n);
  }

  numberGen(r : number){
    console.log("a serio:" + r);
  }

  ngOnInit() {
  }

}
