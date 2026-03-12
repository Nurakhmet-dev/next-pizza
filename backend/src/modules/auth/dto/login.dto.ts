import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {
	@ApiProperty({ required: false })
	@IsString()
	@IsOptional()
	login: string

	@ApiProperty({ required: false })
	@IsEmail({}, { message: 'Введите корректный email' })
	@IsOptional()
	email: string

	@IsString()
	@IsNotEmpty({ message: 'Пароль обязателен' })
	@MinLength(8, { message: 'Пароль должен содержать минимум 8 символов' })
	password: string
}
