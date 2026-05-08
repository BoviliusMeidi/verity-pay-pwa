import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { ASSETS } from '@shared/constants/assets.constant';

@Component({
  selector: 'vp-balance-card',
  imports: [CurrencyPipe],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {
  accountLabel = input<string>();
  currencyCode = input<string>('IDR');
  balance = input.required<number>();
  income = input<number>(0);
  expenses = input<number>(0);
  isContentVisible = input<boolean>(true);

  toggleVisibility = output<void>();
  onSeeAll = output<void>();

  eyeIcon = computed(() => {
    return this.isContentVisible() ? ASSETS.ICONS.EYE_OPEN : ASSETS.ICONS.EYE_CLOSED;
  });

  handleToggle() {
    this.toggleVisibility.emit();
  }
}
