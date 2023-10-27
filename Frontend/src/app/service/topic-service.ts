import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import { Topic } from "../model/Topic";


@Injectable({
  providedIn: 'root'
})
export class TopicService
{
  constructor(private httpClient:HttpClient)
  { }

  getAllTopic():Observable<Topic[]>
  {
    return this.httpClient.get<Topic[]>('http://localhost:8080/api/v1/admin/getAllTopic');
  }

  addNewTopic(topic:Topic):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      topic: topic.topic,
      description: topic.description
    }
    // @ts-ignore
    return this.httpClient.post<string>('http://localhost:8080/api/v1/admin/addNewTopic', JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }

  deleteTopic(id:number):Observable<string>
  {
    // @ts-ignore
    return this.httpClient.delete<string>('http://localhost:8080/api/v1/admin/deleteTopicById/' + id, {responseType: 'text'});
  }

  updateTopic(topic:Topic):Observable<string>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: topic.id,
      topic: topic.topic,
      description: topic.description
    }// @ts-ignore
    return this.httpClient.put<string>('http://localhost:8080/api/v1/admin/uptateTopic/' + topic.id, JSON.stringify(info), {headers: httpHeaders, responseType: 'text'});
  }
}
