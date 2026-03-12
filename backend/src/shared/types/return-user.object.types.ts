import { Prisma } from '@/core/generated/client'

export const returnUserObject: Prisma.UserSelect = {
	id: true,
	firstname: true,
	lastname: true,
	email: true,
	role: true,
	password: true
}
