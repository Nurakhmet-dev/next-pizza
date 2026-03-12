import { TRole } from '@/shared/types/auth.types'
import { applyDecorators, UseGuards } from '@nestjs/common'

import { OnlyAdminGuard } from '../guards/auth/admin.guard'
import { JwtAuthGuard } from '../guards/auth/jwt.guard'

export function Auth(role?: TRole) {
	return applyDecorators(
		role === 'admin'
			? UseGuards(JwtAuthGuard, OnlyAdminGuard)
			: UseGuards(JwtAuthGuard)
	)
}
