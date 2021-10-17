import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Dragon, frilled',
      description: 'Chlamydosaurus kingii',
      isCompleted: false,
      isArchived: true,
      endDate: '9/5/2021',
      selected: true,
    },
    {
      id: 2,
      title: 'Squirrel, uinta ground',
      description: 'Spermophilus armatus',
      isCompleted: false,
      isArchived: true,
      endDate: '2/26/2021',
      selected: false,
    },
    {
      id: 3,
      title: 'Squirrel, indian giant',
      description: 'Ratufa indica',
      isCompleted: false,
      isArchived: false,
      endDate: '4/4/2021',
      selected: false,
    },
    {
      id: 4,
      title: 'Blue fox',
      description: 'Alopex lagopus',
      isCompleted: false,
      isArchived: false,
      endDate: '8/11/2021',
      selected: false,
    },
    {
      id: 5,
      title: 'Western bearded dragon',
      description: 'Amphibolurus barbatus',
      isCompleted: false,
      isArchived: true,
      endDate: '2/8/2021',
      selected: false,
    },
    {
      id: 6,
      title: 'Eastern grey kangaroo',
      description: 'Macropus giganteus',
      isCompleted: false,
      isArchived: false,
      endDate: '3/5/2021',
      selected: false,
    },
    {
      id: 7,
      title: 'African skink',
      description: 'Mabuya spilogaster',
      isCompleted: false,
      isArchived: false,
      endDate: '7/6/2021',
      selected: false,
    },
    {
      id: 8,
      title: 'Hippopotamus',
      description: 'Hippopotamus amphibius',
      isCompleted: false,
      isArchived: true,
      endDate: '4/2/2021',
      selected: false,
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.mock
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.mock[0]
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }
}
