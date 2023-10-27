import {Component, OnInit} from '@angular/core';
import {Account} from "../../../model/Account";

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './userDashBoardView.html',
  styleUrls: ['./userDashBoardView.css']
})
export class UserDashBoardView implements OnInit
{
    user:Account = new Account();
    ngOnInit(): void
    {
      // @ts-ignore
      this.user = JSON.parse( window.sessionStorage.getItem('MCQuser') );
      if(this.user == null)
      {
        this.user = new Account();
      }
    }

    toMyTest()
    {
      window.location.href = "/user/myTest";
    }

    toMyAwards()
    {
      window.location.href = "user/myAwards";
    }

}
