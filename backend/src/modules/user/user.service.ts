import { hash } from 'argon2'

import { PrismaService } from '@/core/providers/prisma/prisma.service'
import { returnUserObject } from '@/shared/types/return-user.object.types'
import { Injectable } from '@nestjs/common'

import { CreateUserDto, UpdateUserDto } from './dto'

@Injectable()
export class UserService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateUserDto) {
		const { password, ...rest } = dto

		return await this.prismaService.user.create({
			data: {
				...rest,
				password: await hash(password)
			}
		})
	}

	public async getById(id: string) {
		return this.prismaService.user.findUnique({
			where: {
				id
			}
		})
	}

	public async getByEmail(email: string) {
		return this.prismaService.user.findUnique({
			where: {
				email
			}
		})
	}

	public async update(id: string, dto: UpdateUserDto) {
		return await this.prismaService.user.update({
			where: { id },
			data: dto
		})
	}

	public async delete(id: string) {
		return await this.prismaService.user.delete({
			where: { id }
		})
	}

	public async getAll(searchTerm?: string) {
		if (searchTerm) this.search(searchTerm)

		return this.prismaService.user.findMany({
			select: returnUserObject,
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	private async search(searchTerm: string) {
		return this.prismaService.user.findMany({
			where: {
				OR: [
					{
						firstname: {
							contains: searchTerm,
							mode: 'insensitive'
						},
						lastname: {
							contains: searchTerm,
							mode: 'insensitive'
						},
						email: {
							contains: searchTerm,
							mode: 'insensitive'
						},
					}
				]
			}
		})
	}
}
