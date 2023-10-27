import {Component, OnInit} from '@angular/core';
import {Account} from "../../../model/Account";
import {AccountService} from "../../../service/account-service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-init-account',
  templateUrl: './initAccountView.html',
  styleUrls: ['./initAccountView.css']
})
export class InitAccountView implements OnInit
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

  constructor(private accountService:AccountService)
  {
  }

  submit()
  {
    let userName = (document.getElementById("userName") as HTMLInputElement).value;
    if(userName == '')
    {
      // @ts-ignore
      document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">Please Enter A User Name</div>';
    }
    else
    {
      this.accountService.initAccount(this.user.id, userName)
        .subscribe(
          data   =>
          {
            console.log(data)
            if(data == 'success')
            {
              this.user.userName = userName;
              window.sessionStorage.setItem("MCQuser", JSON.stringify(this.user));
              window.location.href = this.user.role + "/dashboard";
            }
            else
            {
              // @ts-ignore
              document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">' + data + '</div>';
            }
          },
          error =>
          {
            // @ts-ignore
            document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">' + error + '</div>';
          })
    }
  }
}
