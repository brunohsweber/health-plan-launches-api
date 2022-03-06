import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUserDTO } from "@modules/accounts/dtos/IUserDTO";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const user = {};

    Object.assign(user, {
      username: data.username,
      password: data.password,
    });

    this.users.push(user);
  }
  async findById(id: string): Promise<IUserDTO> {
    return this.users.find((user) => user.id === id);
  }
  async findByUsername(username: string): Promise<IUserDTO> {
    return this.users.find((user) => user.username === username);
  }
  async update(data: IUserDTO): Promise<void> {
    const findIndex = this.users.findIndex((user) => user.id === data.id);

    this.users[findIndex] = {
      username: data.username,
      password: data.password,
    };
  }
  async delete(id: string): Promise<void> {
    const findIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(findIndex, 1);
  }
}

export { UsersRepositoryInMemory };
