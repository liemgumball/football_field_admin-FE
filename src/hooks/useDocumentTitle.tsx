import { useEffect } from 'react'

const useDocumentTitle = (title?: string) => {
	useEffect(() => {
		window.document.title = title
			? `${title} - DN Football`
			: 'Admin - DN Football'
	}, [title])
}

export default useDocumentTitle
