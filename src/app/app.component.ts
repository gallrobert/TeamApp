import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  constructor(private router: Router) {}
  url = '';

  // tslint:disable-next-line:typedef
  ngOnChanges(){
  }
  ngOnInit(): void {
    this.url = this.router.url;
    console.log(this.url);
  }
}
