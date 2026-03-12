import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'

import { User } from '@/core/generated/client'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto implements Omit<
	User,
	'id' | 'createdAt' | 'updatedAt' | 'role' | 'profileImage' | 'phone'
> {
	@ApiProperty()
	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@ApiProperty()
	@IsString()
	@MinLength(2)
	@IsNotEmpty()
	firstname: string

	@ApiProperty({ required: false })
	@IsString()
	//@MinLength(2)
	@IsOptional()
	lastname: string | null

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	login: string

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	password: string
}
