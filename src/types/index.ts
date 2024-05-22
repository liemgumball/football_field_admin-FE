import { timeValues } from '@/constants/time'

export type TTimeStep = (typeof timeValues)[number] | string

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
	size: number
	defaultPrice?: number
	createdAt: string
	updatedAt: string
}

export type TFootballField = {
	_id: string
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
}

export type TBookingStatus = 'confirmed' | 'canceled' | 'pending'

export type TTurnOfServiceStatus = 'available' | 'progressing' | 'used'

export type TTurnOfService = {
	at: TTimeStep
	price: number
	status: TTurnOfServiceStatus
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
}
