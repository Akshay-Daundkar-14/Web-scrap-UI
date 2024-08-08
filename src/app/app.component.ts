import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RuleListComponent } from './components/rule-list/rule-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RuleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-scrap-ui';
}
