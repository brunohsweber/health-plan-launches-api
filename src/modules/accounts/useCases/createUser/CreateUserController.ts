import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    await createUser.execute({
      username,
      password,
    });

    return response.status(201).send();
  }
}
