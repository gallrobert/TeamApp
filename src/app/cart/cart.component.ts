import { Component, OnInit } from '@angular/core';
import {CartService} from '../shared/cart.service';
import {ListOfAppComponent} from '../home/list-of-app/list-of-app.component';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService, ListOfAppComponent]
})
export class CartComponent implements OnInit {
  project: any;
  index = 0;
  private sub: any;
  constructor(private route: ActivatedRoute, private id: CartService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.index = (params['id']-1);
      this.project = this.id.getProject();
      console.log(this.project[this.index]['projectName']);
    });
  }
}
