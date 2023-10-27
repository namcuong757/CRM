import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import { Question } from "../model/Question";


@Injectable({
  providedIn: 'root'
})
export class QuestionService
{
  constructor(private httpClient:HttpClient)
  { }

  getAllQuestion():Observable<Question[]>
  {
    return this.httpClient.get<Question[]>('http://localhost:8080/api/v1/admin/getAllQuestion');
  }

  getQuestionByTestId(id:number):Observable<Question[]>
  {
    return this.httpClient.get<Question[]>('http://localhost:8080/api/v1/admin/getQuestionListByTestId/' + id);
  }

  addNewQuestion(question:Question):Observable<Question>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      question: question.question,
      style   : question.style,
      body    : question.body,
      answer  : question.answer,
      point   : question.point
    }
    // @ts-ignore
    return this.httpClient.post<Question>('http://localhost:8080/api/v1/admin/addNewQuestion', JSON.stringify(info), {headers: httpHeaders});
  }

  deleteQuestion(id:number):Observable<string>
  {
    // @ts-ignore
    return this.httpClient.delete<string>('http://localhost:8080/api/v1/admin/deleteQuestionById/' + id, {responseType: 'text'});
  }

  updateQuestion(question:Question):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: question.id,
      question: question.question,
      style   : question.style,
      body    : question.body,
      answer  : question.answer,
      point   : question.point
    }// @ts-ignore
    return this.httpClient.put<string>('http://localhost:8080/api/v1/admin/uptateQuestion/' + question.id, JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }
}
