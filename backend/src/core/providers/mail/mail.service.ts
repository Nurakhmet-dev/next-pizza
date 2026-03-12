import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	public async sendMail(email: string, subject: string, html: string) {
		return await this.mailerService.sendMail({
			to: email,
			subject,
			html
		})
	}
}
