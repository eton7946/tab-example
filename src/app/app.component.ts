import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { TabBarTabComponent } from './components/tab-bar/tab-bar-tab/tab-bar-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TabBarComponent, TabBarTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tab';
}
