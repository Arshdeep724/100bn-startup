import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTransactionCommand } from './command';
import { RootRepository } from '../../../repositories/root.repository';

@CommandHandler(CreateTransactionCommand)
export class CreateTransactionCommandHandler
  implements ICommandHandler<CreateTransactionCommand>
{
  constructor(private readonly rootRepository: RootRepository) {}

  async execute(command: CreateTransactionCommand) {
    const { transaction } = command;
    await this.rootRepository.createTransaction(transaction);
  }
}
