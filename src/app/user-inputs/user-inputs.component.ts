import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-inputs',
  standalone: false,
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css',
})
export class UserInputsComponent {
  initialInvestment = signal<string>('0');
  annualInvestment = signal<string>('0');
  expectedReturn = signal<string>('5');
  duration = signal<string>('10');
  private investmentService = inject(InvestmentService);
  constructor() {}
  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment(),
    });
    this.resetInput();
  }
  resetInput() {
    this.initialInvestment.set('0');
    this.expectedReturn.set('0');
    this.duration.set('0');
    this.annualInvestment.set('0');
  }
}
