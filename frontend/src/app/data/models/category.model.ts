import { TransactionType } from './transaction.model';

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  icon_name: string;
  color_hex: string;
  is_default: boolean;
}
