import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/application/app.component';
import {OrderComponent} from './components/order/order.component';

@NgModule({
  declarations: [AppComponent, OrderComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


