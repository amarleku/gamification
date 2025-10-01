import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  category: string;
  dueDate?: Date;
  points: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  tasks: Task[] = [
    {
      id: '1',
      title: 'Complete Daily Challenge',
      description: 'Play 3 games to earn bonus points',
      completed: false,
      priority: 'high',
      category: 'Gaming',
      dueDate: new Date(),
      points: 50
    },
    {
      id: '2',
      title: 'Update Profile',
      description: 'Add your gaming preferences',
      completed: true,
      priority: 'medium',
      category: 'Profile',
      points: 25
    },
    {
      id: '3',
      title: 'Share Achievement',
      description: 'Share your latest win on social media',
      completed: false,
      priority: 'low',
      category: 'Social',
      points: 15
    },
    {
      id: '4',
      title: 'Complete Tutorial',
      description: 'Finish the beginner tutorial',
      completed: false,
      priority: 'high',
      category: 'Learning',
      points: 100
    },
    {
      id: '5',
      title: 'Invite Friends',
      description: 'Invite 3 friends to join the platform',
      completed: true,
      priority: 'medium',
      category: 'Social',
      points: 75
    },
    {
      id: '6',
      title: 'Weekly Review',
      description: 'Review your progress this week',
      completed: false,
      priority: 'medium',
      category: 'Review',
      points: 30
    }
  ];

  completedTasks: Task[] = [];
  pendingTasks: Task[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateTaskLists();
  }

  updateTaskLists(): void {
    this.completedTasks = this.tasks.filter(task => task.completed);
    this.pendingTasks = this.tasks.filter(task => !task.completed);
  }

  onBackClick(): void {
    window.history.back();
  }

  onTaskToggle(task: Task): void {
    task.completed = !task.completed;
    this.updateTaskLists();
    console.log('Task toggled:', task.title, task.completed);
  }

  onTaskClick(task: Task): void {
    console.log('Task clicked:', task);
    // Navigate to task details or handle task action
  }

  onBottomNavClick(navItemId: string): void {
    console.log('Bottom nav clicked:', navItemId);
  }

  getPriorityClass(priority: string): string {
    return `priority-${priority}`;
  }

  getTotalPoints(): number {
    return this.tasks.reduce((total, task) => total + (task.completed ? task.points : 0), 0);
  }

  getPendingPoints(): number {
    return this.pendingTasks.reduce((total, task) => total + task.points, 0);
  }
}
