import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateGroupCommand } from './command';
import { RootRepository } from '../../../repositories/root.repository';

@CommandHandler(CreateGroupCommand)
export class CreateGroupCommandHandler
  implements ICommandHandler<CreateGroupCommand>
{
  constructor(private readonly rootRepository: RootRepository) {}

  async execute(command: CreateGroupCommand) {
    const { group } = command;

    // create the user
    await this.rootRepository.createGroup(group);
  }
}
