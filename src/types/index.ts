export type TUser = {
	_id: string
	accessToken: string
	refreshToken: string
	email: string
	name?: string
	phoneNumber: string
	role: string
	avatarFallback?: string
}
