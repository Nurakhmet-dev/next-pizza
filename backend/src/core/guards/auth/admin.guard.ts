import { Observable } from 'rxjs'

import { Role, User } from '@/core/generated/client'
import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
	Injectable
} from '@nestjs/common'

@Injectable()
export class OnlyAdminGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<{ user: User }>()
		const user = request.user

		if (user.role !== Role.admin)
			throw new ForbiddenException(
				'У вас недостаточно прав для выполнения этой операции'
			)
		return true
	}
}
