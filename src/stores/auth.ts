import { TUSer } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TAuthState = {
	user: TUSer | null
	set: (user: TUSer) => void

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
