import {
	IsEmail,
	IsEnum,
	isEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator'
import passport from 'passport'

import { Role, User } from '@/core/generated/client'

export class UpdateUserDto implements Omit<
	User,
	'id' | 'createdAt' | 'updatedAt' | 'profileImage' | 'phone' | 'password'
> {
	@IsString()
	@IsEmail()
	email: string

	@IsString()
	@MinLength(2)
	firstname: string

	@IsString()
	@MinLength(2)
	lastname: string | null

	@IsString()
	login: string

	@IsEnum(Role)
	role: Role | null
}
