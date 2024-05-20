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
	subfields: TSubField[]
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
