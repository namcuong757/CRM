import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jump-page',
  templateUrl: './jumpPage.html',
  styleUrls: ['./jumpPage.css']
})
export class JumpPage implements OnInit
{
  /*
  role     :string = '';
  operation:string = '';
  result   :string = '';

  targetPage:any = '';
  message   :string = '';
  error     :string = '';
*/
  @Input() message:any;
  @Input() error  :any;



  constructor(private router:ActivatedRoute)
  { }

    ngOnInit(): void
    {
      /*this.role      = this.router.snapshot.params['role'     ];
      this.operation = this.router.snapshot.params['operation'];
      this.result    = this.router.snapshot.params['result'   ];

      if(this.role == 'user')
      {
        if(this.operation == 'updateAccount')
        {
          this.targetPage = "user/myAccount";
          if(this.result== 'successful')
          {
            this.message = "Update Account Information Successful";
          }
          else
          {
            this.message = "Update Account Information failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }
        else if(this.operation == 'resetPassword')
        {
          this.targetPage = "user/dashboard";
          if(this.result== 'successful')
          {
            this.message = "Reset Password Successful";
          }
          else
          {
            this.message = "Reset Password failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }
      }
      else
      {
        if(this.operation == 'addTopic')
        {
          this.targetPage = this.role + "/topic";
          if(this.result== 'successful')
          {
            this.message = "Add New Topic Successful";
          }
          else
          {
            this.message = "Add New Topic failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }

        if(this.operation == 'deleteTopic')
        {
          this.targetPage = this.role + "/topic";
          if(this.result== 'successful')
          {
            this.message = "Delete Topic Successful";
          }
          else
          {
            this.message = "Delete Topic failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }

        if(this.operation == 'updateTopic')
        {
          this.targetPage = this.role + "/topic";
          if(this.result== 'successful')
          {
            this.message = "Update Topic Successful";
          }
          else
          {
            this.message = "Update Topic failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }

        if(this.operation == 'addTest')
        {
          this.targetPage = this.role + "/test";
          if(this.result== 'successful')
          {
            this.message = "Add Test Successful";
          }
          else
          {
            this.message = "Add Test failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }

        if(this.operation == 'deleteTest')
        {
          this.targetPage = this.role + "/test";
          if(this.result== 'successful')
          {
            this.message = "Delete Test Successful";
          }
          else
          {
            this.message = "Delete Test failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }

        if(this.operation == 'updateTest')
        {
          this.targetPage = this.role + "/test";
          if(this.result== 'successful')
          {
            this.message = "Update Test Successful";
          }
          else
          {
            this.message = "Update Test failed";
            // @ts-ignore
            document.getElementById('message').innerHTML = "<div class='alert alert-danger'>" + this.result + "</div>";
          }
        }

      }

      setTimeout(()=>
      {
        window.location.href = this.targetPage;
      }, 5000);*/

    }
}
