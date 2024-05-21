import { TFootballField } from '@/types'
import { create } from 'zustand'

type TFootballFieldState = {
	field: TFootballField | undefined
	isStale: boolean
	isFetching: boolean

	refetch: (() => void) | undefined
}

type TTStore = TFootballFieldState & {
	set: (props: Partial<TFootballFieldState>) => void
}

const useFootballFieldStore = create<TTStore>()((set) => ({
	field: undefined,
	isStale: true,
	isFetching: false,

	set: (props) => set({ ...props }),
	refetch: undefined,
}))

export default useFootballFieldStore
