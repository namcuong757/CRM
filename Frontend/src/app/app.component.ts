import { Component } from '@angular/core';
import {Account} from "./model/Account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MCQ-Project';
  user:Account = new Account();

  constructor()
  {
    // @ts-ignore
    this.user = JSON.parse( window.sessionStorage.getItem('MCQuser') );
    if(this.user == null)
    {
      this.user = new Account();
    }
  }
}
