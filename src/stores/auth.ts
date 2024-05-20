import { TUser } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TAuthState = {
	user: TUser | null
	set: (user: TUser) => void

	remove: () => void
}

const useAuthStore = create<TAuthState>()(
	persist(
		(set) => ({
			user: null,
			set: (user) => set({ user: user }),
			remove: () => set({ user: null }),
		}),
		{ name: 'auth' },
	),
)

export default useAuthStore
