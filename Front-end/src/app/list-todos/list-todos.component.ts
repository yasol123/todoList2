import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message:string = ""
    // todos = [
    //   new Todo(1, 'Learn a Programming Language', false, new Date("12/31/2022")),
    //   new Todo(2, 'Learn Angular', false, new Date("1/2/2022")),
    //   new Todo(3, 'Learn Springboot', false, new Date("1/3/2021")),
    //   new Todo(4, 'Learn Python', true, new Date("12/30/2021")),
    // ]

  // todos = [
  //   new Todo(1, 'Learn a Programming Language', false, new Date("12/31/2022")),
  //   new Todo(2, 'Learn Angular', false, new Date("1/2/2022")),
  //   new Todo(3, 'Learn Springboot', false, new Date("1/3/2021")),
  //   new Todo(4, 'Learn Python', true, new Date("12/30/2021")),
  // ]

  constructor(private todoService:TodoDataService, private router:Router) { }

  ngOnInit(): void {
    // this.todoService.getAllTodos('yasol123').subscribe(
    //   response => {
    //     console.log(response);
    //     this.todos = response;
    //   }
    //);
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.getAllTodos('yasol123').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }
  deleteTodo(id:number){
    this.todoService.deleteTodo('yasol123', id).subscribe(
      response => {
        //console.log(response);
        this.message = `Todo Id# ${id} has been successfully deleted`;
        this.refreshTodos();
      }
    );
    console.log(`Todo Id#${id} is deleted`);
  }

  updateTodo(id:number){
    console.log(`Todo Id# ${id} is updated`);
    this.router.navigate(['todos',id]);
  }
  addTodo(){
    this.router.navigate(['todos', -1]);
  }
}
