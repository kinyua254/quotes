import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(
      Quote.generateId(),
      "Socrates",
      "The only thing i know is that i know nothing",
      "kinyua254",
      0,
      0,
      new Date('2022,02,06')


    ),
    new Quote(
      Quote.generateId(),
      "Game of thrones",
      "Power is power",
      "kinyua254",
      0,
      0,
      new Date('2022,02,06')

    ),
  





  ]

  newQuote(newQuote: Quote){
    this.quotes.push(newQuote);
  }
}
