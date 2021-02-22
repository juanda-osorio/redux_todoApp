import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from './../model/todo.model';
import { AppState } from '../../appState';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe( todo => this.todos = todo )
  }

}
