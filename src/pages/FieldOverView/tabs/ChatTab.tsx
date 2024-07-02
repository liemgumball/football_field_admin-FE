import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SendIcon } from 'lucide-react'
import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react'

type TMessage = {
	id: number
	text: string
}

const ChatTab = () => {
	const [messages, setMessages] = useState<TMessage[]>([])
	const [input, setInput] = useState<string>('')
	const scrollAreaRef = useRef<HTMLDivElement>(null)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	const handleSendMessage = (e: FormEvent) => {
		e.preventDefault()
		if (input.trim() !== '') {
			setMessages([...messages, { id: messages.length + 1, text: input }])
			setInput('')
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
					{messages.map((message) => (
						<div key={message.id} className="mb-2 flex justify-end">
							<p className="w-fit max-w-96 break-words rounded-md bg-secondary p-3 text-secondary-foreground">
								{message.text}
							</p>
						</div>
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
					className="h-12 flex-grow rounded-lg border p-2"
					placeholder="Type a message..."
				/>
				<Button
					type="submit"
					size="icon"
					className="rounded-full"
					disabled={!input}
				>
					<SendIcon className="p-1 text-secondary" />
				</Button>
			</form>
		</div>
	)
}

export default ChatTab
