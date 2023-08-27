import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';
import { CreateGroupDto, CreateTransactionDto, CreateUserDto } from 'src/dtos';

type PrismaTransactionClient = Omit<
  PrismaService,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>;

@Injectable()
export class ReputationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: CreateUserDto) {
    await this.prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
      },
    });
  }

  async createGroup(group: CreateGroupDto) {
    await this.prisma.group.create({
      data: {
        name: group.name,
        createdByUserId: group.createdByUserId,
        users: {
          connect: {
            id: group.createdByUserId,
          },
        },
      },
    });
  }

  async createTransaction(transaction: CreateTransactionDto) {
    await this.prisma.transaction.create({
      data: {
        lenderUserId: transaction.lenderUserId,
        borrowerUserId: transaction.borrowerUserId,
        lenderUserName: transaction.lenderUserName,
        borrowerUserName: transaction.borrowerUserName,
        description: transaction.description,
        status: transaction.status != null ? transaction.status : null,
        categoryId:
          transaction.categoryId != null ? transaction.categoryId : null,
        subCategoryId:
          transaction.subCategoryId != null ? transaction.subCategoryId : null,
        categoryName:
          transaction.categoryName != null ? transaction.categoryName : null,
        subCategoryName:
          transaction.subCategoryName != null
            ? transaction.subCategoryName
            : null,
        groupId: transaction.groupId != null ? transaction.groupId : null,
      },
    });
  }

  async addUserToGroup(userId: string,groupId: string) {
    await this.prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        users: {
          connect: {
            id: userId
          }
        }
      }
    })
  }
}
