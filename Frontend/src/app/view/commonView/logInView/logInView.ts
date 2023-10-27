import { Component } from '@angular/core';
import {AccountService} from "../../../service/account-service";

@Component({
  selector: 'app-log-in',
  templateUrl: './logInView.html',
  styleUrls: ['./logInView.css']
})
export class LogInView
{

  constructor(private accountService:AccountService)
  {
  }

  login()
  {
    // @ts-ignore
    document.getElementById("message").innerHTML = '<div class="m-2">Log in to continue</div>';

    let emailId  = (document.getElementById("emailId" ) as HTMLInputElement).value;
    let password = (document.getElementById("password") as HTMLInputElement).value;
    if(emailId == '')
    {
      // @ts-ignore
      document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">E-mail ID is Empty</div>';
    }
    else if(password == '')
    {
      // @ts-ignore
      document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">Password is Empty</div>';
    }
    else
    {
      this.accountService.login(emailId, password).subscribe(data=>
      {
        if(data != null)
        {
          window.sessionStorage.setItem("MCQuser", JSON.stringify(data));

          console.log(data);
          if(data.userName == null)
          {
            window.location.href = data.role + "/initAccount";
          }
          else
          {
            window.location.href = data.role + "/dashboard";
          }
        }
        else
        {
          // @ts-ignore
          document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">No Such Account</div>';
        }
      },
        error => {
          // @ts-ignore
          document.getElementById("message").innerHTML = '<div class="text-bg-danger h6 m-2">Server Error</div>';
          console.log(error);
        })
    }
  }
}
