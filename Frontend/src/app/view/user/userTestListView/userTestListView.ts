import {Component, OnInit} from '@angular/core';
import {Test} from "../../../model/Test";
import {Account} from "../../../model/Account";
import {TestService} from "../../../service/test-service";

@Component({
  selector: 'app-user-test-list-view',
  templateUrl: './userTestListView.html',
  styleUrls: ['./userTestListView.css']
})
export class UserTestListView implements OnInit
{
   testList:Test[] = new Array();
   user:Account = new Account();
   constructor(private testService:TestService,)
   {}

  ngOnInit(): void
  {
    // @ts-ignore
    this.user = JSON.parse( window.sessionStorage.getItem('MCQuser') );
    this.testService.getAllTest()
      .subscribe(
        data =>
        {
          this.testList = data

        }
      )
  }

   showTest(test:Test)
   {
     window.location.href = "user/myTest/" + test.id;
   }

}
