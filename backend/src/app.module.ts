import { Module } from '@nestjs/common'

import { CoreModule } from './core/core.module'
import { AuthModule } from './modules/auth/auth.module'
import { EmailModule } from './modules/email/email.module'
import { FilesModule } from './modules/files/files.module'
import { UserModule } from './modules/user/user.module'

@Module({
	imports: [CoreModule, UserModule, AuthModule, EmailModule, FilesModule]
})
export class AppModule {}
