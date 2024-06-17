import { Component } from '@angular/core';


interface Todo {
  task: string;
  isEditing: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent{
  newTodo!: string;
  todos:Todo[]=[];

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push({ task: this.newTodo.trim(), isEditing: false });
      this.newTodo = '';
    }
  }

  editTodo(todo: any) {
    todo.isEditing = true;
  }

  saveTodo(todo: any) {
    todo.isEditing = false;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
