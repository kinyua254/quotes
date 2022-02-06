import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ElapsedTimePipe } from './elapsed-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    QuotesComponent,
    ElapsedTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
