import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

const db = {
	name: env('DATABASE_NAME'),
	user: env('DATABASE_USER'),
	password: env('DATABASE_PASSWORD'),
	host: env('DATABASE_HOST'),
	port: env('DATABASE_PORT')
}
//DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
export const prismaConnectUrl = `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}?schema=public`

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations'
	},
	datasource: {
		url: prismaConnectUrl
	}
})
