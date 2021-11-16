import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
}
