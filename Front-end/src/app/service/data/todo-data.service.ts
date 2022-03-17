import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  getAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`)
    //return this.http.get("http://localhost:8080/hello-world-bean");
    //console.log("Execute HelloWorldBean Service");
  }

  getTodo(username:string, id:Number){
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  deleteTodo(username:string, id:Number){
    return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`);
  }

  updateTodo(username:string, id:number, todo: Todo){
    return this.http.put(`http://localhost:8080/jpa/users/${username}/todos/${todo.id}`, todo);
  }

  addTodo(username:string, todo:object){
    return this.http.post(`http://localhost:8080/jpa/users/${username}/todos/`, todo);
  }

}
