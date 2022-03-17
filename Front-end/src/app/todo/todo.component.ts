import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id!:number;
  todo!:Todo;
  constructor(
    private dataService:TodoDataService, 
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //It initializes immediately. If it doesn't exist, there will be an error caused by ASYNC subscribe
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1){
      this.dataService.getTodo('yasol123', this.id).subscribe(
        data => {
          this.todo = data;
        }
      )
    }
  }
  saveTodo(){
    if(this.id == -1){
      //Create Todo
      this.dataService.addTodo('yasol123', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }else{
      this.dataService.updateTodo('yasol123', this.id, this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']);
        }
      );
    }
  }

}
