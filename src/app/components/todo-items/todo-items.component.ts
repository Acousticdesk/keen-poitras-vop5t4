import { Component } from '@angular/core';
import { TodoItemsService } from '../../services/todo-items.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent {
  constructor(private readonly todoItemsService: TodoItemsService) {}

  todoItems$ = this.todoItemsService.getItems$();
}
