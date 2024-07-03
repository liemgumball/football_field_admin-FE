import ChatBox from '@/components/ChatBox'
import { useParams } from 'react-router-dom'

const Chat = () => {
	const { id } = useParams()

	if (!id) throw new Error('No Client ID provided.')

	return (
		<div className="col-span-12">
			<ChatBox receiverId={id} />
		</div>
	)
}

export default Chat
