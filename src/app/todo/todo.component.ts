import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskStorageService } from '../task-storage.service';
import { Task } from '../shared/models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[];
  difficulty = new FormControl('');

  items: string[] = ['Выберите число', '1', '2', '3', '4', '5'];

  constructor(private storage: TaskStorageService) {}

  ngOnInit(): void {
    this.storage.init();
    this.tasks = this.storage.getTasks();
  }

  stars(difficulty: number): string {
    if (difficulty === 1) return '★';
    else if (difficulty === 2) return '★★';
    else if (difficulty === 3) return '★★★';
    else if (difficulty === 4) return '★★★★';
    else if (difficulty === 5) return '★★★★★';
    else return '';
  }

  delete(id: number): void {
    this.storage.delete(id);
    this.tasks = this.storage.getTasks();
  }
}
