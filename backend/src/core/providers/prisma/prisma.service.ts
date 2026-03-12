import { prismaConnectUrl } from 'prisma.config'
import { PrismaClient } from 'src/core/generated/client'

import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	constructor() {
		const adapter = new PrismaPg({
			connectionString: prismaConnectUrl
		})
		super({ adapter })
	}

	public async onModuleInit() {
		await this.$disconnect()
	}

	public async onModuleDestroy() {
		await this.$disconnect()
	}
}
