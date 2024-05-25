import {
	Sheet,
	SheetTitle,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetDescription,
} from '@/components/ui/sheet'
import { TSubField } from '@/types'
import SubfieldEditForm from './SubfieldEditForm'
import { PencilIcon } from 'lucide-react'

const SubFieldEditSheet = ({ subfield }: { subfield: TSubField }) => {
	return (
		<Sheet>
			<SheetTrigger>
				<PencilIcon size={15} />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle className="text-2xl font-bold">Edit SubField</SheetTitle>
					<SheetDescription className="text-base font-medium">
						Make changes to subfield's information here
					</SheetDescription>
				</SheetHeader>
				<SubfieldEditForm subfield={subfield} />
			</SheetContent>
		</Sheet>
	)
}

export default SubFieldEditSheet
