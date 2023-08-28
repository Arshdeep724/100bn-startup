import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './command';
import { RootRepository } from '../../../repositories/root.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly rootRepository: RootRepository) {}

  async execute(command: CreateUserCommand) {
    const { user } = command;
    await this.rootRepository.createUser(user);
  }
}
