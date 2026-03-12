import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const config = new DocumentBuilder()
	.setTitle('Diplom project')
	.setVersion('1.0.0')
	.build()

export const GetDocFactory = app => {
	return () => SwaggerModule.createDocument(app, config)
}
