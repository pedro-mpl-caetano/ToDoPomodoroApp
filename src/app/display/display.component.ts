import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  tasks : Task[];
  @Input() newTotal1 : number;
  timeSpare : number = 0;

  getTotal(){
    console.log("newTotal1: " + this.newTotal1);
    return this.newTotal1;
  }

  constructor() { }

  // Organize tasks by 'relevance'
  organizeTasks(){

    let inOrder = false;
    while(!inOrder){
      inOrder = true;
      for(let i = 0; i < this.tasks.length - 1; i++){
        if(this.tasks[i].relevance < this.tasks[i+1].relevance){
          this.switchTasks(i,i+1);
          inOrder = false;
        }
      }
    }
  }

  // Algorithm: Switch two values in an array
  switchTasks(start_index : number, finish_index : number){
    this.tasks.splice(start_index, 0, this.tasks[finish_index]);
    this.tasks.splice(finish_index+1, 0, this.tasks[start_index+1]);
    this.tasks.splice(start_index+1, 1);
    this.tasks.splice(finish_index+1, 1);
  }

  // Check if period has enough hours
  checkHours(){
    let sum = 0;
    for(let i = 0; i < this.tasks.length; i++){
      sum += this.tasks[i].duration;
    }
    this.timeSpare = sum - this.newTotal1;

  }

  ngOnChanges(){
    console.log("ngOnChanges!");
  }

  ngOnInit() {
    console.log("ngOnInit!");
    this.tasks = [
      new Task('Work','Create simple "Component" Project', 5, 9),
      new Task('Work','Create simple "Built-In Dir" Project', 4, 7),
      new Task('Work','Create simple "Custom Dir" Project', 3, 6),
      new Task('Work','Create simple "RxJS Programming" Project', 4, 5),
      new Task('Work','Create simple "Pipes" Project', 3, 7),
      new Task('Work','Create simple "Forms" Project', 3, 7),
      new Task('Work','Create simple "DI & Providers" Project', 5, 9),
      new Task('Work','Create simple "HTTP" Project', 5, 9),
      new Task('Work','Create simple "Routing" Project', 4, 8),
      new Task('Work','Create simple "Testing" Project', 5, 8),
      new Task('Personal','Pickup Motorcycle" Project', 1, 4),
    ];
  }

}
