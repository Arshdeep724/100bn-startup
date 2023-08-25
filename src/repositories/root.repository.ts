import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

type PrismaTransactionClient = Omit<
  PrismaService,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>;

@Injectable()
export class ReputationRepository {
  constructor(private readonly prisma: PrismaService) {}
  
  // async createUser() {
  //   await this.prisma.user.create({

  //   })
  // }
}
