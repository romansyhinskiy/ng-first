import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo";
import {isBoolean} from "util";

@Component({
  selector: 'mb-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
      idForTodo: 4;
      this.todoTitle = '';
      this.todos = [
          {
              'id': 1,
              'title': 'First  fucking task',
              'completed': false,
              'editing': false
          }
      ];
  }

    doneEditing(todo: Todo){
        todo.editing = false;
    }

    editTodo(todo: Todo):void{
        todo.editing = true;
    }

    addTodo():void{
    if(this.todoTitle.trim().length === 0){
      return;
    }
    this.todos.push({
        id : this.idForTodo,
        title : this.todoTitle,
        completed : false,
        editing : false
    });
    this.todoTitle = '';
    this.idForTodo++;
    }

    deleteTodo( id:number ):void{
    this.todos = this.todos.filter(todo => todo.id !== id);
    }




}
