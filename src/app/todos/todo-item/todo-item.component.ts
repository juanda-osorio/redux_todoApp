import { FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  //He visto por internet que con la exclamación le dices que es opcional?
  @Input() todo!: Todo;

  // chkCompletado: FormControl;
  // txtInput: FormControl;

  
  constructor() {
    console.log(this.todo);
  }
  
  ngOnInit(): void {
    console.log(this.todo);
    this.todo.completado = true;
    /*
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    */
  }

}
