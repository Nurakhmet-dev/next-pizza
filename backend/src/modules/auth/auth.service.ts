import { verify } from 'argon2'

import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { CreateUserDto } from '../user/dto/'
import { UserService } from '../user/user.service'

import { LoginDto } from './dto'    

@Injectable()
export class AuthService {
	public constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService
	) {}

	public async register(dto: CreateUserDto) {
		const oldUser = await this.userService.getByEmail(dto.email)
		if (oldUser) throw new BadRequestException('Пользватель уже сушествует')

		const user = await this.userService.create(dto)
		const tokens = this.issueTokens(user.id)
		return {
			user,
			...tokens
		}
	}

	public async login(dto: LoginDto) {
		const user = await this.validateUser(dto)
		const tokens = this.issueTokens(user.id)

		return {
			user,
			...tokens
		}
	}

	public async getNewToken(refreshToken: string) {
		try {
			const result = await this.jwtService.verifyAsync(refreshToken)
			const user = await this.userService.getById(result.id)
			if (!user) {
				throw new UnauthorizedException('Пользователь не найден')
			}
			const tokens = this.issueTokens(user.id)
			return {
				user,
				...tokens
			}
		} catch (error) {
			throw new UnauthorizedException(
				'Невалидный или просроченный refresh токен'
			)
		}
	}

	private issueTokens(userId: string) {
		const data = { id: userId }
		const accessToken = this.jwtService.sign(data, {
			expiresIn: '1h'
		})
		const refreshToken = this.jwtService.sign(data, {
			expiresIn: '7h'
		})

		return {
			accessToken,
			refreshToken
		}
	}

	private async validateUser(dto: LoginDto) {
		const user = await this.userService.getByEmail(dto.email)
		if (!user) throw new NotFoundException('Неверный логин или пароль')
		const isVallPass = await verify(user.password, dto.password)
		if (!isVallPass)
			throw new UnauthorizedException('Неверный логин или пароль')
		return user
	}
}
