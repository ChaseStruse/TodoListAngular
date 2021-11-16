import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'To Do List';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggleAddTask().subscribe(
      (showAddTask: boolean) => {
        this.showAddTask = showAddTask;
      }
    );
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
