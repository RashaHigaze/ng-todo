import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock :ITodo[] =  [
    {
      "title":"Dragon, frilled",
      "description":"Chlamydosaurus kingii",
      "isCompleted":false,
      "isArchived":true,
      "endDate":"9/5/2021"
    },
    {"title":"Squirrel, uinta ground","description":"Spermophilus armatus","isCompleted":false,"isArchived":true,"endDate":"2/26/2021"},
    {"title":"Squirrel, indian giant","description":"Ratufa indica","isCompleted":true,"isArchived":false,"endDate":"4/4/2021"},
    {"title":"Blue fox","description":"Alopex lagopus","isCompleted":false,"isArchived":false,"endDate":"8/11/2021"},
    {"title":"Western bearded dragon","description":"Amphibolurus barbatus","isCompleted":true,"isArchived":true,"endDate":"2/8/2021"},
    {"title":"Eastern grey kangaroo","description":"Macropus giganteus","isCompleted":true,"isArchived":false,"endDate":"3/5/2021"},
    {"title":"African skink","description":"Mabuya spilogaster","isCompleted":false,"isArchived":false,"endDate":"7/6/2021"},
    {"title":"Hippopotamus","description":"Hippopotamus amphibius","isCompleted":false,"isArchived":true,"endDate":"4/2/2021"},
  ]

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable()
  }
}
