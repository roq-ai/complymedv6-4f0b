import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  name: string;
  tasks_completed?: number;
  client_id: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  _count?: {};
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  client_id?: string;
}
