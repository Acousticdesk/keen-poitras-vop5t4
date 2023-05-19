import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoItemsService {
  constructor(private readonly http$: HttpClient) {}

  getItems$() {
    return this.http$.get<{completed: boolean; title: string}[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
