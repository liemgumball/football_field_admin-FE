import {
	Sheet,
	SheetTitle,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetDescription,
	SheetFooter,
} from '@/components/ui/sheet'
import { TSubField } from '@/types'
import SubFieldEditForm from './SubFieldEditForm'
import { PencilIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const SubFieldEditSheet = ({ subfield }: { subfield: TSubField }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger className="max-w-max">
				<Button variant="ghost" size="icon" className="p-2">
					<PencilIcon size={16} />
				</Button>
			</SheetTrigger>
			<SheetContent side="top">
				<SheetHeader>
					<SheetTitle className="text-2xl font-bold">Edit SubField</SheetTitle>
					<SheetDescription className="text-base font-medium">
						Make changes to subfield's information here
					</SheetDescription>
				</SheetHeader>

				<SheetFooter>
					<SubFieldEditForm
						subfield={subfield}
						close={() => setIsOpen(false)}
					/>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default SubFieldEditSheet
