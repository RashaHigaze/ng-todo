import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  public minDate: Date = new Date()
  
  constructor(private todoService: TodoService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  public onNewTodoSubmit(): void {
    //create the new todo obj
    //send obj to service
    if (this.form.valid) {
      const formValue = this.form.form.value;
      const newTodo: ITodo = {
        id: uuidv4(),
        title: formValue.title,
        description: formValue.description,
        isCompleted: false,
        isArchived: false,
        endDate: formValue.endDate,
        selected: false,
      };
      this.todoService.addNewTodo(newTodo);
      this.dialog.closeAll();
    }
  }
}
