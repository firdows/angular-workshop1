import { Component, OnInit } from '@angular/core';
import { AppRouting } from './app.routing';
declare const App: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workshop1';

  ngOnInit() {
    App.initialLoadPage();
  }

  
}
