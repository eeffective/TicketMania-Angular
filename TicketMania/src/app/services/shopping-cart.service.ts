import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { list, add, remove, quantity, destor } from 'cart-localstorage';
import { TicketModel } from '../models/TicketModel';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCartChanged = new EventEmitter<any[]>();
  public tickets: TicketModel[] = list();

  constructor() { }

  getCartItem(id){

  }

  addTicketToCart(ticket){
    this.tickets.push(ticket);
    this.shoppingCartChanged.emit(this.tickets.slice())
  }

}
