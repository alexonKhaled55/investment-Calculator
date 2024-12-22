import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { UserInputsComponent } from '../user-inputs/user-inputs.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserInputsComponent, InvestmentResultsComponent],
  imports: [CurrencyPipe,FormsModule],
  exports: [UserInputsComponent, InvestmentResultsComponent],
})
export class Investment {}
