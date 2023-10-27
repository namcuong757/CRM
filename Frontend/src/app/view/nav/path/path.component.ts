import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit
{
  @Input() path:any;
  pageTitle = "Test";
  link:any[] = [];

  ngOnInit(): void
  {
    if(this.path[1] == 'initAccount' || this.path[1] == 'myAccount' || this.path[1] == 'resetPassword')
    {
      this.pageTitle = 'My Account';
      if(this.path[1] == 'initAccount')
      {
        this.link.push({link: this.path[0] + '/initAccount', path:'Account'});
        this.link.push({link: this.path[0] + '/initAccount', path:'Initialize'});
      }
      if(this.path[1] == 'myAccount')
      {
        this.link.push({link: this.path[0] + '/myAccount', path:'Account'});
        this.link.push({link: this.path[0] + '/myAccount', path:'EditAccount'});
      }
      if(this.path[1] == 'resetPassword')
      {
        this.link.push({link: this.path[0] + '/myAccount', path:'Account'});
        this.link.push({link: this.path[0] + '/resetPassword', path:'ResetPassword'});
      }
    }
    else
    {
      this.link.push({link: this.path[0] + '/dashboard', path:'Home'})
      if(this.path[1] == 'myTest')
      {
        this.pageTitle = 'My Test';
        this.link.push({link: this.path[0] + '/myTest', path:'Test'})
        if(this.path.length == 3)
        {
          this.link.push({link: this.path[0] + '/myTest/' + this.path[2], path:'TakeTest'})
        }
      }
      if(this.path[1] == 'myAwards')
      {
        this.pageTitle = 'My Awards';
        this.link.push({link: this.path[0] + '/myAwards', path:'Awards'})
        if(this.path.length == 3)
        {
          this.link.push({link: this.path[0] + '/myAwards/' + this.path[2], path:'TestResult'})
        }
      }
      if(this.path[1] == 'topic')
      {
        this.pageTitle = 'Topic Management';
        this.link.push({link: this.path[0] + '/topic', path:'Topic'})
      }
      if(this.path[1] == 'test')
      {
        this.pageTitle = 'Test Management';
        this.link.push({link: this.path[0] + '/test', path:'Test'})
        if(this.path.length == 3)
        {
          this.link.push({link: this.path[0] + '/test/' + this.path[2], path:'EditTest'})
        }
      }
      if(this.path[1] == 'question')
      {
        this.pageTitle = 'Question Management';
        this.link.push({link: this.path[0] + '/question', path:'Question'})
        if(this.path.length == 3)
        {
          this.link.push({link: this.path[0] + '/question/' + this.path[2], path:'EditQuestion'})
        }
      }
      if(this.path[1] == 'account')
      {
        this.pageTitle = 'Account Management';
        this.link.push({link: this.path[0] + '/account', path:'Account'})
        if(this.path.length == 3)
        {
          this.link.push({link: this.path[0] + '/account/' + this.path[2], path:'EditAccount'})
        }
      }
    }
  }
}
