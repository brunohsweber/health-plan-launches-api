import { AppError } from "@shared/errors/AppError";

export class EmailOrPasswordIncorrectError extends AppError {
  constructor() {
    super("Email or password incorrect!");
  }
}
