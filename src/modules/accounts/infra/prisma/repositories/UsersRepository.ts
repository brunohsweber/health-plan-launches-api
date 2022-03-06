import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUserDTO } from "@modules/accounts/dtos/IUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

class UsersRepository implements IUsersRepository {
  public async create(data: ICreateUserDTO): Promise<void> {
    await prisma.users.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });
  }

  public async findById(id: string): Promise<IUserDTO> {
    const user = await prisma.users.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    return user;
  }

  public async findByUsername(username: string): Promise<IUserDTO> {
    const user = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
        },
      },
    });

    return user;
  }

  public async update(data: IUserDTO): Promise<void> {
    await prisma.users.update({
      data: {
        username: data.username,
        password: data.password,
      },
      where: {
        id: data.id,
      },
    });
  }

  public async delete(id: string): Promise<void> {
    await prisma.users.delete({
      where: {
        id,
      },
    });
  }
}

export { UsersRepository };
