import { UserRole, type User } from '../types/user';

const USERS = [
  {
    uuid: '3f9f8b7e-8c3d-4d2a-9b6e-2f7a4c8e1d3f',
    name: 'John',
    role: UserRole.ADMIN,
    email: 'john@airgarage.com',
  },
  {
    uuid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Jane',
    role: UserRole.OWNER,
    email: 'jane@airgarage.com',
  },
  {
    uuid: '123e4567-e89b-12d3-a456-426614174000',
    name: 'Alice',
    role: UserRole.EMPLOYEE,
    email: 'alice@airgarage.com',
  },
  {
    uuid: '9b2c1d3a-4e5f-6789-abcd-ef9876543210',
    name: 'Bob',
    role: UserRole.ENFORCER,
    email: 'bob@airgarage.com',
  },
  {
    uuid: 'abcdef12-3456-7890-abcd-efabcdef1234',
    name: 'Charlie',
    role: UserRole.VISITOR,
    email: 'charlie@airgarage.com',
  },
  {
    uuid: '550e8400-e29b-41d4-a716-446655440000',
    name: 'David',
    role: UserRole.DRIVER,
    email: 'david@airgarage.com'
  },
]

export class UserService {
  private async simulateApiDelay(ms = 100): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getUser(simulateDelay = true): Promise<User | null> {
    if (simulateDelay) await this.simulateApiDelay();

    // Replace index to get a different user.
    return USERS[0];
  }
}