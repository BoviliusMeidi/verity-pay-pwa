export interface User {
  id: string;
  username: string;
  email: string;
  // password_hash: string; *Only in Backend*
  base_currency: string;
  created_at: Date | string;
  updated_at: Date | string;
  deleted_at?: Date | string | null;
}
