import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.resultsData());

  // asreadonly() method provided by angular which you can call on signals to get a read only version of those signals , can't be manipulated , alternative to using
  // results =  this.investmentService.resultsData.asReadonly();
}
