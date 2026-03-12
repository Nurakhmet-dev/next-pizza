const role = {
	admin: 'admin',
	user: 'user'
} as const
export type TRole = keyof typeof role
