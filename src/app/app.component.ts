import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS } from '@angular/http';

import { ObjectionModel } from './objection';

import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, DataService]
})
export class AppComponent {
  title = 'app works!';

  objections$: Observable<ObjectionModel[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.objections$ = this.dataService.objections$; // subscribe to entire collection
    this.dataService.fetchObjections(); // load all
  }
}
