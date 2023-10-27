import {Component, OnInit} from '@angular/core';
import {TestService} from "../../../service/test-service";
import {QuestionService} from "../../../service/question-service";
import { ActivatedRoute } from '@angular/router';
import { Test } from 'src/app/model/Test';
import {Question} from "../../../model/Question";

@Component({
  selector: 'app-admin-manage-test-view',
  templateUrl: './adminManageTestView.html',
  styleUrls: ['./adminManageTestView.css']
})
export class AdminManageTestView implements OnInit
{
    testId:number = -1;
    test:Test = new Test();
    questionList:Question[] = new Array();


    newQuestion:Question = new Question();
    choiceList:string[] = new Array();

    currentQuestion:Question = new Question();
    currentChoiceList:string[] = new Array();
    currentAnswerList:string[] = new Array();

    showCreateNewQuestionView:boolean = false;
    showEditQuestionView:boolean = false;
    showAddExitQuesitonView:boolean = false;

    constructor(private router:ActivatedRoute, private testService:TestService, private questionService:QuestionService)
    {

    }
    ngOnInit(): void
    {
      this.testId = this.router.snapshot.params['tid'];
      this.testService.getTestById(this.testId)
        .subscribe(
          data=>{
            if(data != null)
            {
              this.test = data;
              this.questionService.getQuestionByTestId(this.testId)
                .subscribe(
                  data =>
                  {
                    this.questionList = data
                    this.currentQuestion = this.questionList[0];
                  },
                  error =>
                  {

                  }
                )
            }
            else
            {

            }
          },
          error => {

          }
        )
    }

    showCurrentQuestion(q:Question)
    {
      this.currentQuestion = q;
      this.currentChoiceList = JSON.parse(atob(q.body));
      this.currentAnswerList = JSON.parse(atob(q.answer));
      this.showCreateNewQuestionView = false;
      this.showEditQuestionView = true;
      this.showAddExitQuesitonView = false;
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


    showCreateQuestion()
    {
      this.showCreateNewQuestionView = true;
      this.showEditQuestionView = false;
      this.showAddExitQuesitonView = false;
    }

  getNewQuestionType()
  {
    this.newQuestion.style = (document.getElementById('newQuestionStyle') as HTMLSelectElement).value
  }


  getQuestionType()
  {

  }

  removeQuestionType()
  {

  }
  addChoice()
  {

  }

  autoSaveChoice(i:number)
  {

  }

  submit()
  {

  }
  removeChoice(i:number)
  {

  }
}
