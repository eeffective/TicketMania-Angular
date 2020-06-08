import { Component, OnInit } from '@angular/core';
import { total, list, add, remove, destroy, update, get, exists, quantity } from 'cart-localstorage';
import { Observable } from 'rxjs';
import { TicketModel } from 'src/app/models/TicketModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  tickets: any[];

  constructor() {
    let tickets: TicketModel[];
    list().array.forEach(element => {
      tickets.push(new TicketModel(element.id, element.name, element.quantity))
    })
    this.tickets = tickets;
  }

  ngOnInit(): void {


    console.log(this.tickets);
  }

  increaseAmount(id) {
    quantity(id, 1)
  }

  clearCart() {
    destroy();
  }

  decreaseAmount(id) {
    quantity(id, -1)
  }

  ticketAmount(id): number {
    console.log(get(id).quantity)
    return get(id).quantity;
  }

}
