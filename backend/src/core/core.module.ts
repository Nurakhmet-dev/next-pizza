import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { MailModule } from './providers/mail/mail.module'
import { PrismaModule } from './providers/prisma/prisma.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true
		}),
		PrismaModule,
		MailModule
	]
})
export class CoreModule {}
