import { Auth } from '@/core/decorators/auth.decorator'
import { CurrentUser } from '@/core/decorators/user.decorator'
import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

import { UpdateUserDto } from './dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Auth()
	@Get('profile')
	public getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id)
	}

	@Auth()
	@Put('profile/edit/:id')
	public update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
		const updatedUser = this.userService.update(id, dto)
		if (!updatedUser) throw new NotFoundException()
		return updatedUser
	}

	

	/*** --- ADMIN --- ***/
	@Auth('admin')
	@Get('all')
	public getAll(@Query('searchTerm') searchTerm) {
		return this.userService.getAll(searchTerm)
	}

	@Auth('admin')
	@Get('by-id/:id')
	public getById(@Param('id') id: string) {
		return this.userService.getById
	}
}
