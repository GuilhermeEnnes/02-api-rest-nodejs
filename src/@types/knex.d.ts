// eslint-disable-next-line
import { Knex } from 'knex'

declare module "kenx/types/tables" {
  export interface Tables {
    transactions: {
      id: string;
      title: string;
      amount: nummber;
      crated_at: string;
      session_id?: string;
    };
  }
}
