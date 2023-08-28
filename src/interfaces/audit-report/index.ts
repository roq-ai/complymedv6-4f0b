import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface AuditReportInterface {
  id?: string;
  report_date: any;
  client_id: string;
  created_at?: any;
  updated_at?: any;

  client?: ClientInterface;
  _count?: {};
}

export interface AuditReportGetQueryInterface extends GetQueryInterface {
  id?: string;
  client_id?: string;
}
