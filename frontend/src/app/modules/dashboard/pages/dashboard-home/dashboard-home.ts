import { Component, signal } from '@angular/core';
import { BalanceCard } from '../../components/balance-card/balance-card';

@Component({
  selector: 'vp-dashboard-home',
  imports: [BalanceCard],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss',
})
export class DashboardHome {
  isCardVisible = signal<boolean>(true);

  toogleCard() {
    this.isCardVisible.update(value => !value)
  }
}
