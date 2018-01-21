import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product: string;
  @Input() productOrdered: string;

  onInputEvent({target}): void {
    this.product = target.value;
  }

  onNotify(message: string): void {
    this.productOrdered = message;
  }

}
