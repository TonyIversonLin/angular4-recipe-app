import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My Recepit App';
  name = '';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCuFsXxyFu0WzCuVchwm3Riy32l3AY2zRM',
      authDomain: 'my-recipt-app.firebaseapp.com',
    });
  }

}
