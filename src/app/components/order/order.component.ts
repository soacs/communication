import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'order-processor',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input() quantity: number;
  @Output() productOrdered: EventEmitter<string> = new EventEmitter<string>();

  private _item: string;

  @Input()
  set item(value: string) {
    this._item = value;
    if (this._item != undefined) {
      console.log(`Sending order to buy product: ${this.item}  of quantity:  ${this.quantity}`);
      this.productOrdered.emit('The product ' + this.item + ' with quantity ' + this.quantity + ' has been ordered');
    }
  }

  get item(): string {
    return this._item;
  }


}
