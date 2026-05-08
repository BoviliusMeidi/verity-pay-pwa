export type AccountType = 'CASH' | 'BANK' | 'INVESTMENT' | 'CREDIT';

export interface Account {
  id: string;
  user_id: string;
  account_name: string;
  account_type: AccountType;
  balance: number;
  include_in_total: boolean;
  is_investment: boolean;
  color_hex: string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at?: Date | string | null;
}
