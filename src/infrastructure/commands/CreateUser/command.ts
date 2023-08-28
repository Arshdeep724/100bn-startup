import { CreateUserDto } from "src/dtos";

export class CreateUserCommand {
  constructor(public readonly user: CreateUserDto) {}
}
