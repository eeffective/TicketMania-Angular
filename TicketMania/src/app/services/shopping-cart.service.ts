import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { list, add, total, remove, quantity, destroy } from 'cart-localstorage';
import { TicketModel } from '../models/TicketModel';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartChanged = new EventEmitter<TicketModel[]>();
  public tickets: TicketModel[] = [];

  constructor() {
    for (let ticket of list()) {
      this.tickets.push(new TicketModel(ticket.id, ticket.name, ticket.quantity, ticket.price))
    }
  }


  addTicket(ticket, event) {
    add({ id: `${ticket.id}${event.id}`, name: `${event.name} | ${ticket.type}`, price: ticket.price })
    this.tickets.push(ticket);
    this.shoppingCartChanged.emit(this.tickets.slice())
  }

  getCart() {
    return this.tickets;
  }

  decreaseAmount(ticket) {
    quantity(ticket.id, -1);
  }

  increaseAmount(ticket) {
    quantity(ticket.id, +1);
  }

  getTotal() {
    return total();
  }
}
