import { Component, OnInit, Input } from '@angular/core';
import { total, list, add, remove, destroy, update, get, exists, quantity } from 'cart-localstorage';
import { Observable } from 'rxjs';
import { TicketModel } from 'src/app/models/TicketModel';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() tickets: TicketModel[];
  cartTickets: TicketModel[] = [];
  service: ShoppingCartService;
  total = total();

  constructor(service: ShoppingCartService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.cartTickets = this.service.getCart();
    console.log(this.cartTickets)
  }

  increase(ticket){
    this.service.increaseAmount(ticket);
  }

  clearCart() {
    destroy();
  }

  decrease(ticket) {
    this.service.decreaseAmount(ticket)
  }

}
