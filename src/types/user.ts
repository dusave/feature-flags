export enum UserRole {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
  EMPLOYEE = 'EMPLOYEE',
  ENFORCER = 'ENFORCER',
  VISITOR = 'VISITOR',
  DRIVER = 'DRIVER',
}

export interface User {
  uuid: string;
  name: string;
  role: UserRole;
  email: string;
}
