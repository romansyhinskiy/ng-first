import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mb-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: object[];
  todoTitle: string;

  constructor() { }

  ngOnInit() {
    todoTitle = '';
    this.todos = [
      {
        'id' : 1,
        'title' : 'My first Task',
        'completed' : 'false',
        'editing' : false
      },
      {
        'id' : 2,
        'title' : 'My Second Task',
        'completed' : 'false',
        'editing' : false
      },
      {
        'id' : 3,
        'title' : 'My Third Task',
        'completed' : 'false',
        'editing' : false
      }
    ]
  }

}
