export type TransactionType = 'INCOME' | 'EXPENSE' | 'TRANSFER';
export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'VOIDED';

export interface Transaction {
  id: string;
  user_id: string;
  from_account_id?: string;
  to_account_id?: string;
  category_id?: string;
  amount: number;
  fee: number;
  type: TransactionType;
  status: TransactionStatus;
  transaction_date: Date | string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at?: Date | string | null;

  is_synced: boolean;
}
