import * as express from 'express'
import { join } from 'path'

import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { GetDocFactory } from './core/configs/swagger.config'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = app.get(ConfigService)

	app.use('/uploads', express.static(join(__dirname, '../..', 'uploads')))

	SwaggerModule.setup('swagger', app, GetDocFactory(app))

	const PORT = config.getOrThrow<number>('APP_PORT') | 4000
	await app.listen(PORT)
}
bootstrap()
