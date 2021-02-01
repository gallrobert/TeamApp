import { Component, OnInit } from '@angular/core';
import {CartService} from '../../shared/cart.service';
import {CartComponent} from '../../cart/cart.component';

@Component({
  selector: 'app-list-of-app',
  templateUrl: './list-of-app.component.html',
  styleUrls: ['./list-of-app.component.css'],
  providers: [CartService]
})
export class ListOfAppComponent implements OnInit {
  projects = [];
  index = 0;
  constructor(private project: CartService) {}
  ngOnInit(): void {
    // @ts-ignore
    this.projects = this.project.getProject();
  }

  sendIndex(){

  }
}
