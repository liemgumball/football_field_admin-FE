import { timeValues } from '@/constants/time'

export enum UserRole {
	CUSTOMER = '2001',
	ADMIN = '17601',
	SUPER_USER = '19383',
}

export type TTimeStep = (typeof timeValues)[number] | string

export type TSize = 5 | 6 | 7 | 11

export type TUser = {
	_id: string
	accessToken: string
	refreshToken: string
	email: string
	name?: string
	phoneNumber: string
	role: UserRole
	avatarFallback?: string
	fieldId: string
}

export type TLocation = {
	name: string
	geo: {
		type: 'Point'
		coordinates: [number, number]
	}
}

export type TSubField = {
	_id: string
	name: string
	size: TSize
	defaultPrice?: number
	createdAt: string
	updatedAt: string
	image?: string
}

export type TFootballField = {
	_id: string
	adminId: string
	admin?: TUser
	name: string
	rating: number | null
	openedAt: string
	closedAt: string
	images: string[]
	location: TLocation
	subfields?: TSubField[]
	subfieldIds: string[]
	createdAt: string
	updatedAt: string
	isActive: boolean
}

export type TBookingStatus = 'confirmed' | 'canceled' | 'pending'

export type TTurnOfServiceStatus =
	| 'available'
	| 'unavailable'
	| 'progressing'
	| 'used'

export type TTurnOfService = {
	at: TTimeStep
	price: number
	status: TTurnOfServiceStatus
	bookingId?: string
}

export type TFootballFieldSize = '5' | '6' | '7' | '11'

export type TDayOfServices = {
	_id: string
	fieldId: string
	field?: TFootballField
	subfieldId: string
	subfield?: TSubField
	date: string
	turnOfServices: TTurnOfService[]
	availability?: boolean
}

export type TBooking = {
	_id: string
	userId: string
	name: string | null
	subfieldId: string
	subfield: TSubField
	fieldId: string
	field: TFootballField
	date: Date | string
	from: TTimeStep
	to: TTimeStep
	price: number
	status: TBookingStatus
	confirmed?: boolean
	canceled?: boolean
	paid?: boolean
	createdAt?: Date | string
	updatedAt?: Date | string
	description?: string
	additionalServices?: unknown
	user: TUser
	review?: TReview
}

export type TReview = { rating: number; description: string }

export type TBookingReview = {
	review: TReview
	user: TUser
	_id: string
}
