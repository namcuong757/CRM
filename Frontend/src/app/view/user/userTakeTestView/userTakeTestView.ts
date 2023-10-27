import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-question-list-view',
  templateUrl: './userTakeTestView.html',
  styleUrls: ['./userTakeTestView.css']
})
export class UserTakeTestView implements OnInit
{
  startTest:boolean = false;
  currentQuestion:any = null;
  currentQuestionIndex:number = -1;
  questionList:any = [];


  setId:number = -1;

  constructor(private router:ActivatedRoute )
  {
    let question = {questionId:1, question:"Char* string = 'Hello world';\nprintf(\"%d\", sizeof(string))\nPlease choose correct answer",
      answers:['A. 4', 'B. 8', 'C. 2', 'D. I don\'t known'], correctAnswer:['D. I don\'t known']}
      this.questionList = [question,question,question,question] ;
  }

  ngOnInit(): void
  {
    this.setId = this.router.snapshot.params['tid'];
  }

  startButton()
  {
    this.startTest = true;
    this.currentQuestionIndex = 1;
    this.currentQuestion = this.questionList[0];

  }





}
