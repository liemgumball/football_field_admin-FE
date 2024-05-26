import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import SubFieldImageForm from './SubFieldImageForm'

const SubFieldImageDialog = ({
	id,
	children,
}: {
	id: string
	children?: React.ReactNode
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">Change Image</DialogTitle>
					<DialogDescription>
						Make changes to subfield's image here.
					</DialogDescription>
				</DialogHeader>
				<SubFieldImageForm id={id} close={() => setIsOpen(false)} />
			</DialogContent>
		</Dialog>
	)
}

export default SubFieldImageDialog
