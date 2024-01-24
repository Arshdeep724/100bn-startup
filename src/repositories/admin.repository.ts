import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { CreateGroupDto, CreateTransactionDto, CreateUserDto } from 'src/dtos';

type PrismaTransactionClient = Omit<
  PrismaService,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>;

@Injectable()
export class AdminRepository {
  constructor(private readonly prisma: PrismaService) {}
  
  async deleteAll() {
    await this.prisma.$transaction(async (tx) => {
      await tx.category.deleteMany();
      await tx.subCategory.deleteMany();
      await tx.transaction.deleteMany();
      await tx.group.deleteMany();
      await tx.user.deleteMany();
    })
  }
}
