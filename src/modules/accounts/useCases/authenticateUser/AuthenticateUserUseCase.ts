/* eslint-disable prettier/prettier */
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

import { EmailOrPasswordIncorrectError } from "./EmailOrPasswordIncorrectError";
import { UserNotFoundError } from "./UserNotFoundError";


interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new UserNotFoundError();
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new EmailOrPasswordIncorrectError()
    }

    const token = sign({ username }, "400966585f0ad4b7b224e97274092d74", {
      subject: user.username,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        username: user.username
      },
      token,
    };

    return tokenReturn;

  }
}

export { AuthenticateUserUseCase }
