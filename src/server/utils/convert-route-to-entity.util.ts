const mapping: Record<string, string> = {
  'audit-reports': 'audit_report',
  businesses: 'business',
  clients: 'client',
  organisations: 'organisation',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
