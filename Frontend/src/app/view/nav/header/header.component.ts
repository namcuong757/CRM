import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../../model/Account";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  @Input() user: any;
  path:string[] = [];
  location:string = '';

  ngOnInit(): void
  {
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start+1);
    this.path = relUrl.split("/");
    if(this.user.role == 'user')
    {
      this.location = 'MyTest';
    }
    else
    {
      this.location = 'Test Center'
    }
  }

  logout()
  {
    window.sessionStorage.removeItem("MCQuser");
    window.location.href = "login";
  }

}
