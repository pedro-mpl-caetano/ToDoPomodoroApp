import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTotal : number;
  title = 'app';

  ngOnChanges(){

  }

  runForest(n : number){
    this.newTotal = n;
    console.log("App number: " + n);
  }
}
