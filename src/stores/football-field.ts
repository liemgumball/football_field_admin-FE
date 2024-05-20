import { TFootballField } from '@/types'
import { create } from 'zustand'

type TFootballFieldState = {
	field: TFootballField | null

	set: (field: TFootballField) => void
}

const useFootballFieldStore = create<TFootballFieldState>()((set) => ({
	field: null,

	set: (field) => set({ field: field }),
}))

export default useFootballFieldStore
