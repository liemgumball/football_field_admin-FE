import useAuthStore from '@/stores/auth'
import { TMessage } from '@/types'
import { format } from 'date-fns'

const Message = (props: TMessage) => {
	const { createdAt, message, senderId } = props

	const useId = useAuthStore((state) => state.user?._id)

	if (useId === senderId)
		return (
			<div className="mb-2 flex items-center justify-end gap-2">
				<span className="text-xs text-muted-foreground">
					{format(createdAt, 'p')}
				</span>
				<p className="w-fit max-w-96 break-words rounded-md bg-primary px-3 py-2 text-primary-foreground">
					{message}
				</p>
			</div>
		)

	return (
		<div className="mb-2 flex items-center justify-start gap-2">
			<p className="w-fit max-w-96 break-words rounded-md bg-primary px-3 py-2 text-primary-foreground">
				{message}
			</p>
			<span className="text-xs text-muted-foreground">
				{format(createdAt, 'p')}
			</span>
		</div>
	)
}

export default Message
