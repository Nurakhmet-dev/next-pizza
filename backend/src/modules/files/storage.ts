import { Request } from 'express'
import { diskStorage } from 'multer'
import { v4 as uuidv4 } from 'uuid'

function normalizeFileName(
	req: Request,
	file: Express.Multer.File,
	callback: (err: null | Error, filename: string) => void
) {
	const fileExtName = file.originalname.split('.').pop()
	callback(null, `${uuidv4()}.${fileExtName}`)
}

export const fileStorage = diskStorage({
	destination: './uploads',
	filename: normalizeFileName
})
