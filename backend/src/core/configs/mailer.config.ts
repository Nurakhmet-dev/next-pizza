import type { MailerOptions } from '@nestjs-modules/mailer'
import type { ConfigService } from '@nestjs/config'

export const getMailerConfig = (config: ConfigService): MailerOptions => ({
	transport: {
		host: config.getOrThrow<string>('MAIL_HOST'),
		port: config.getOrThrow<string>('MAIL_PORT'),
		secure: false,
		auth: {
			user: config.getOrThrow<string>('MAIL_LOGIN'),
			pass: config.getOrThrow<string>('MAIL_PASSWORD')
		}
	},
	defaults: {
		from: `"Bilim Time" ${config.getOrThrow<string>('MAIL_LOGIN')}`
	}
})
