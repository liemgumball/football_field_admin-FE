import { useEffect, useState } from 'react'
import { OnResultFunction, QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'

const QRReader = (props: { closeDialog: () => void }) => {
	const [data, setData] = useState('')
	const { closeDialog } = props
	const navigate = useNavigate()

	const handleResult: OnResultFunction = (result, error) => {
		if (result) {
			const link = result.getText()

			if (link.startsWith('/bookings/')) {
				setData(link)
			}
		}

		if (error) {
			// toast({
			// 	title: 'Booking not found.',
			// })
		}
	}

	useEffect(() => {
		if (data) {
			navigate(data)
			closeDialog()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	return (
		<div className="mt-4 overflow-hidden rounded-xl">
			<QrReader
				constraints={{}}
				videoStyle={{ scale: '150%' }}
				onResult={handleResult}
			/>
		</div>
	)
}

export default QRReader
