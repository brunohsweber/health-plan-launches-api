import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserDTO } from "../dtos/IUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<IUserDTO>;
  findByUsername(username: string): Promise<IUserDTO>;
  update(data: IUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };
