import {Component, OnInit} from '@angular/core';
import {Topic} from "../../../model/Topic";
import {TopicService} from "../../../service/topic-service";
import {Account} from "../../../model/Account";

@Component({
  selector: 'app-admin-manage-topic-view',
  templateUrl: './adminManageTopicView.html',
  styleUrls: ['./adminManageTopicView.css']
})
export class AdminManageTopicView implements OnInit
{
  user:Account = new Account();
  topicList:Topic[] = new Array();
  currentTopic:Topic = new Topic();

  message:string = '';
  error:string = '';
  showAddTopicView:boolean = false;
  showDeleteConfirmView:boolean = false;
  showMessageView:boolean = false;

  constructor(private topicService:TopicService)
  {
  }
  ngOnInit(): void
  {
    // @ts-ignore
    this.user = JSON.parse( window.sessionStorage.getItem('MCQuser') );
    this.topicService.getAllTopic()
      .subscribe(
        data => {this.topicList = data}
      )
  }

/****************************** ADD TOPIC *******************************/
  showAddTopic()
  {
    this.showAddTopicView = true;
  }

  closeAddTopic()
  {
    this.showAddTopicView = false;
    // @ts-ignore
    document.getElementById("newTopic").removeAttribute('style');
    (document.getElementById("newTopic") as HTMLInputElement).value = '';
    (document.getElementById("newDescription") as HTMLTextAreaElement).value = '';
  }

  addNewTopic()
  {
    // @ts-ignore
    document.getElementById("newTopic").removeAttribute('style');
    let topic = new Topic();
    topic.topic = (document.getElementById("newTopic") as HTMLInputElement).value;
    if(topic.topic != '')
    {
      topic.description = (document.getElementById("newDescription") as HTMLTextAreaElement).value;
      this.topicService.addNewTopic(topic)
        .subscribe(
          data   =>
          {
            console.log(data)
            if(data == 'success')
            {
              this.reLoadTopic();
              this.showAddTopicView = false;
              this.showMessageView = true;
              this.jumpWindow("Create Topic Successful", '');
            }
            else
            {
              this.showMessageView = true;
              this.jumpWindow("Create Topic Failed", data);
            }
          },
          error =>
          {
            this.showMessageView = true;
            this.jumpWindow("Create Topic Failed", error.message);
          });
    }
    else
    {
      // @ts-ignore
      document.getElementById("newTopic").style.borderColor = 'red'
    }
  }

/****************************** GET TOPIC ******************************/

  reLoadTopic()
  {
    this.topicService.getAllTopic()
      .subscribe(
        data => {this.topicList = data}
      )
  }
  showTopicDetail(topic:Topic)
  {
    if(this.currentTopic.id > 0)
    {
      this.currentTopic = topic;
      // @ts-ignore
      document.getElementById("topic").removeAttribute('style');
      (document.getElementById("description") as HTMLTextAreaElement).value = this.currentTopic.description;
    }
    else
    {
      this.currentTopic = topic;
    }
  }

/***************************** DELETE TOPIC *****************************/
  showDeleteConfirm()
  {
    this.showDeleteConfirmView = true;
  }

  closeDeleteConfirm()
  {
    this.showDeleteConfirmView = false;
  }

  deleteTopic()
  {
    this.topicService.deleteTopic(this.currentTopic.id)
      .subscribe(
        data   =>
        {
          this.showDeleteConfirmView = false;
          if(data == 'success')
          {
            this.reLoadTopic();
            this.showMessageView = true;
            this.jumpWindow("Delete Topic Successful", '');
          }
          else
          {
            this.showMessageView = true;
            this.jumpWindow("Delete Topic Failed", data);
          }
        },
        error =>
        {
          this.showMessageView = true;
          this.jumpWindow("Delete Topic Failed", error.message);
        }
      )
  }

/***************************** UPDATE TOPIC *****************************/
  updateTopic()
  {
    console.log("update")
    // @ts-ignore
    document.getElementById("topic").removeAttribute('style');
    this.currentTopic.topic = (document.getElementById("topic") as HTMLInputElement).value;
    if(this.currentTopic.topic != '')
    {
      this.currentTopic.description = (document.getElementById("description") as HTMLTextAreaElement).value;
      this.topicService.updateTopic(this.currentTopic)
        .subscribe(
          data   =>
          {
            console.log(data)
            if(data == 'success')
            {
              this.showMessageView = true;
              this.jumpWindow("Update Topic Successful", '');
            }
            else
            {
              this.showMessageView = true;
              this.jumpWindow("Update Topic Failed", data);
            }
          },
          error =>
          {
            this.showMessageView = true;
            this.jumpWindow("Delete Topic Failed", error.message);
          }
        )
    }
    else
    {
      // @ts-ignore
      document.getElementById("topic").style.borderColor = 'red';
    }
  }

/***************************** Massage View *****************************/
  jumpWindow(message:string, error:string)
  {
    this.message = message;
    this.error = error;
    this.showMessageView = true;
    setTimeout(()=>
    {
      this.showMessageView = false;
    }, 5000);
  }


}
