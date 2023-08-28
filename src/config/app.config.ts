interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Super Admin'],
  customerRoles: [],
  tenantRoles: ['Organisation Admin', 'Business', 'Team Member', 'Super Admin'],
  tenantName: 'Client',
  applicationName: 'ComplyMedV6',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
