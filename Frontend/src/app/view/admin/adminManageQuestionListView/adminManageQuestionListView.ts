import {Component, OnInit} from '@angular/core';
import {Question} from "../../../model/Question";
import {QuestionService} from "../../../service/question-service";
import {Account} from "../../../model/Account";

@Component({
  selector: 'app-admin-manage-question-list-view',
  templateUrl: './adminManageQuestionListView.html',
  styleUrls: ['./adminManageQuestionListView.css']
})
export class AdminManageQuestionListView implements OnInit
{
  user:Account = new Account();
  questionList:Question[] = new Array();

  showAddQuestionView:boolean = false;
  showUpdateQuestionView:boolean = false;
  showNewQuestionView:boolean = false;
  showDeleteQuestionConfirmView:boolean = false;
  newQuestion:Question = new Question();
  currentQuestion:Question = new Question();
  choiceList:string[] = new Array();
  currentChoiceList:String[] = new Array();
  currentAnswerList:String[] = new Array();

  constructor(private questionService:QuestionService)
  {
  }

  ngOnInit(): void
  {
    // @ts-ignore
    this.user = JSON.parse( window.sessionStorage.getItem('MCQuser') );
    this.questionService.getAllQuestion()
      .subscribe(
        data=>
        {
          this.questionList = data;
          console.log(data);
        });
  }

  showAddQuestion()
  {
    this.showAddQuestionView = true;
  }

  closeAddQuestion()
  {
    this.showAddQuestionView = false;
  }

  getQuestionType()
  {
    this.newQuestion.style = (document.getElementById("newQuestionStyle") as HTMLSelectElement).value;
  }

  removeQuestionType()
  {
    this.newQuestion.style = '';
  }

  addChoice()
  {
    this.choiceList.push(this.choiceList.length.toString());
  }

  removeChoice(i:number)
  {
    this.choiceList.splice(i, 1);;
  }

  autoSaveChoice(i:number)
  {
    console.log(i);
    this.choiceList[i] = (document.getElementById('choice' + i) as HTMLInputElement).value;
    console.log(this.choiceList);
  }

  submit()
  {
    this.newQuestion.question = (document.getElementById("newQuestion") as HTMLTextAreaElement).value;
    this.newQuestion.point = parseInt((document.getElementById("newPoint") as HTMLInputElement).value);
    if(this.newQuestion.style == 'Short Answer')
    {
      this.newQuestion.body = ''
      this.newQuestion.answer = (document.getElementById("newAnswer") as HTMLTextAreaElement).value;
    }
    else
    {
      let answer:string[] = new Array();
      for(let i=0; i<this.choiceList.length; i++)
      {
        if((document.getElementById("selectedChoice" + i) as HTMLInputElement).checked == true)
        {
          answer.push(this.choiceList[i]);
        }
      }
      this.newQuestion.body = btoa(JSON.stringify(this.choiceList))
      this.newQuestion.answer = btoa(JSON.stringify(answer))
    }

    this.questionService.addNewQuestion(this.newQuestion)
      .subscribe(
        data=>
        {
          if (data != null)
          {
            //window.location.href = this.user.role + "/addTest/successful";
            this.currentQuestion = data;
            this.newQuestion = new Question();
            this.showAddQuestionView = false;
            this.showNewQuestionView = true;
            //window.open(this.user.role + "/test/" + this.currentTest.id);
            //window.location.href = this.user.role + "/addTest/successful";
          }
          else
          {
            window.location.href = this.user.role + "/addTest/failed";
          }
        },
        error =>
        {
          window.location.href = this.user.role + "/addQuestion/" + error.message;
        }
      )
  }

  closeNewQuestionView()
  {
    window.location.href = this.user.role + "/question";
  }

  QuestionView()
  {
    window.open(this.user.role + "/question/" + this.currentQuestion.id);
    window.location.href = this.user.role + "/question";
  }

  showQuestionView(q:Question)
  {
    window.open(this.user.role + "/question/" + q.id);
  }

  showUpdateQuestion(q:Question)
  {
    this.currentQuestion = q;
    if(q.style != 'Short Answer')
    {
      this.currentChoiceList = JSON.parse(atob(q.body));
      this.currentAnswerList = JSON.parse(atob(q.answer));
      console.log(this.currentAnswerList);
    }
    this.showUpdateQuestionView = true;
  }

  closeUpdateQuestion()
  {
    this.currentQuestion = new Question();
    this.showUpdateQuestionView = false;
  }

  showDeleteConfirm(q:Question)
  {
    this.currentQuestion = q;
    this.showDeleteQuestionConfirmView = true;
  }

  closeDeleteConfirm()
  {
    this.currentQuestion = new Question();
    this.showDeleteQuestionConfirmView = false;
  }


  addCurrentChoice()
  {
    this.currentChoiceList.push(this.choiceList.length.toString());
  }

  removeCurrentChoice(i:number)
  {
    this.currentChoiceList.splice(i, 1);;
  }

  isAnswer(index:number):boolean
  {
    for(let i =0; i < this.currentAnswerList.length; i++)
    {
      if(this.currentChoiceList[index] == this.currentAnswerList[i])
      {
        return true;
      }
    }
    return false;
  }

  autoSaveCurrentChoice(i:number)
  {
    this.currentChoiceList[i] = (document.getElementById('currentChoice' + i) as HTMLInputElement).value;
  }



}
