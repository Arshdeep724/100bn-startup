import { CreateTransactionDto } from "src/dtos";

export class CreateTransactionCommand {
  constructor(public readonly transaction: CreateTransactionDto) {}
}
