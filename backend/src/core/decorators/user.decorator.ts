import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { User } from '../generated/client'

export const CurrentUser = createParamDecorator(
	(
		data: keyof User,
		ctx: ExecutionContext
	): User | User[keyof User] | null => {
		const request = ctx.switchToHttp().getRequest<{ user: User }>()
		const user = request.user
		if (!user) console.log('Not found "User"')
		return data ? user[data] : user
	}
)
