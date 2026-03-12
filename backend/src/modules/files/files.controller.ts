import { type Response } from 'express'

import { Auth } from '@/core/decorators/auth.decorator'
import {
	Controller,
	Get,
	MaxFileSizeValidator,
	Param,
	ParseFilePipe,
	Post,
	Res,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes } from '@nestjs/swagger'

import { FilesService } from './files.service'
import { fileStorage } from './storage'

@Controller('upload')
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	//@Auth()
	@Post('user-profile/image')
	@UseInterceptors(FileInterceptor('file', { storage: fileStorage }))
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'string',
					format: 'binary'
				}
			}
		}
	})
	public async create(
		@UploadedFile(
			new ParseFilePipe({
				validators: [
					new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 })
				]
			})
		)
		file: Express.Multer.File
	) {
		return file
	}

	@Get('profile-image/:filename')
	getProfileImage(@Param('filename') filename: string, @Res() res: Response) {
		return res.sendFile(filename, { root: '../../uploads' })
	}
}
