import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  role: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, role: 'user', name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, role: 'user', name: 'Bob Smith', email: 'bob@example.com' },
    {
      id: 3,
      role: 'admin',
      name: 'Charlie Brown',
      email: 'charlie@example.com',
    },
  ];

  findAllWithRole(role?: 'admin' | 'user') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, user: User) {
    const existingUserIndex = this.users.findIndex((u) => u.id === id);
    if (existingUserIndex !== -1) {
      this.users[existingUserIndex] = user;
      return this.users[existingUserIndex];
    }
    return false;
  }

  deleteUser(id: number) {
    const existingUserIndex = this.users.findIndex((u) => u.id === id);
    if (existingUserIndex !== -1) {
      this.users.splice(existingUserIndex, 1);
      return true;
    }
    return false;
  }
}
