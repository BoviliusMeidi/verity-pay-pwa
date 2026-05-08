import Dexie, { Table } from 'dexie';
import { Injectable } from '@angular/core';
import { Transaction } from '../../data/models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDbService extends Dexie {
  transactions!: Table<Transaction>;

  constructor() {
    super('VerityPayDB');

    this.version(1).stores({
      transactions: 'id, user_id, category_id, transaction_date, is_synced',
    });
  }

  async addTransaction(data: Transaction) {
    return await this.transactions.add(data);
  }

  async getAllTransactions() {
    return await this.transactions.toArray();
  }

  async clearAllDataTransactions() {
    return await this.transaction('rw', this.transactions, async () => {
      await this.transactions.clear();
    });
  }
}
