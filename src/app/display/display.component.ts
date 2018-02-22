import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  tasks : Task[];

  constructor() { }

  ngOnInit() {
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
    console.log(this.tasks);
  }



}
