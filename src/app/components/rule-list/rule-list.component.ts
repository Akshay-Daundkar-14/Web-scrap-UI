import { Component } from '@angular/core';
import { Rule } from '../../models/Rule';
import { RuleService } from '../../services/rule.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-rule-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rule-list.component.html',
  styleUrl: './rule-list.component.css'
})
export class RuleListComponent {
  rules: Rule[] = [];
  constructor(private ruleService: RuleService) { }
  ngOnInit(): void {
    this.ruleService.getRules().subscribe((data: Rule[]) => {
      //this.rules = data;
      this.rules = data.map(rule => ({ ...rule, collapsed: true }));
    });
  }

  toggleDescription(rule: Rule): void {
    rule.collapsed = !rule.collapsed;
  }
}
