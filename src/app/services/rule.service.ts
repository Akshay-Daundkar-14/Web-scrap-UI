import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rule } from '../models/Rule';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private apiUrl = 'https://localhost:7234/api/WebScraps';

  constructor(private http: HttpClient) { }

  getRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.apiUrl);
  }
}
