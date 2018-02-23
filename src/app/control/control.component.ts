import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Output() newTotal = new EventEmitter<number>();

  public firstDay : number = 1;
  secondDay : number = 7;
  hrsPerDay : number = 8;
  totalHours : number = 0;

  constructor() {
    this.calculateTotal();
    this.newTotal.emit(this.totalHours);
  }

  getFirstDay(){
    return this.firstDay;
  }

  getSecondday(){
    return this.secondDay;
  }

  getHrsPerDay(){
    return this.hrsPerDay;
  }

  getTotalHours(){
    return this.totalHours;
  }

  calculateTotal(){
    this.totalHours = ( this.secondDay - this.firstDay + 1 ) * this.hrsPerDay;
  }

  numberGen(fDay : number, sDay : number, hrsDay : number){
    if(fDay != 0)
      this.firstDay = fDay;
    if(sDay != 0)
      this.secondDay = sDay;
    if(hrsDay != 0)
      this.hrsPerDay = hrsDay;

    this.calculateTotal();
    this.newTotal.emit(this.totalHours);
    console.log("values: " + this.firstDay + ", " + this.secondDay + ", " + this.hrsPerDay);
  }

  ngOnInit() {
  }

}
