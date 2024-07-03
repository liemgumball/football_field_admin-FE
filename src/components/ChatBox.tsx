import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { createMessage, getMessages } from '@/services/message'
import { TMessage } from '@/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SendIcon } from 'lucide-react'
import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react'
import { toast } from './ui/use-toast'
import { Skeleton } from './ui/skeleton'
import { Icons } from './Icons'
import Message from './Message'

const ChatBox = (props: { receiverId: string }) => {
	const [input, setInput] = useState<string>('')
	const scrollAreaRef = useRef<HTMLDivElement>(null)

	const queryClient = useQueryClient()

	const { isLoading, data: messages } = useQuery<TMessage[]>({
		queryKey: ['message', props.receiverId],
		queryFn: () => getMessages(props.receiverId),
	})

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['message', props.receiverId],
		mutationFn: createMessage,
		onSettled: () => {
			setInput('')
			queryClient.invalidateQueries({
				queryKey: ['message', props.receiverId],
			})
		},
		onError: () =>
			toast({
				title: 'Failed to send message',
				variant: 'destructive',
			}),
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	const handleSendMessage = (e: FormEvent) => {
		e.preventDefault()
		if (input.trim() !== '') {
			mutateAsync({
				message: input,
				receiverId: props.receiverId,
			})
		}
	}

	useEffect(() => {
		if (scrollAreaRef.current) {
			scrollAreaRef.current.scrollTo({
				top: scrollAreaRef.current.scrollHeight,
				behavior: 'smooth',
			})
		}
	}, [messages])

	return (
		<div className="w-full rounded border p-4 pr-1 shadow-lg">
			<ScrollArea>
				<div
					className="mb-4 max-h-[500px] min-h-[300px] overflow-y-auto pr-4"
					ref={scrollAreaRef}
				>
					{isLoading && (
						<>
							<div className="mb-2 flex items-center justify-end gap-2">
								<Skeleton className="h-10 w-80 break-words rounded-md" />
							</div>
							<div className="mb-2 flex items-center justify-end gap-2">
								<Skeleton className="h-11 w-96 break-words rounded-md" />
							</div>
							<div className="mb-2 flex items-center justify-end gap-2">
								<Skeleton className="h-11 w-48 break-words rounded-md" />
							</div>
							<div className="mb-2 flex items-center justify-end gap-2">
								<Skeleton className="h-11 w-64 break-words rounded-md" />
							</div>
						</>
					)}
					{messages?.map((message) => (
						<Message {...message} key={message._id} />
					))}
				</div>
			</ScrollArea>
			<form
				onSubmit={handleSendMessage}
				className="mt-2 flex items-center gap-2 px-2"
			>
				<Input
					type="text"
					value={input}
					onChange={handleInputChange}
					className="h-11 flex-grow rounded-lg border p-2"
					placeholder="Type a message..."
				/>
				<Button
					type="submit"
					size="icon"
					className="rounded-full"
					disabled={!input || isPending}
				>
					{isPending ? (
						<Icons.Loader className="p-0" size={16} />
					) : (
						<SendIcon className="p-1 text-secondary" />
					)}
				</Button>
			</form>
		</div>
	)
}

export default ChatBox
