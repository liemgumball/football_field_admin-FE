import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

const SubfieldServiceSkeleton = () => (
	<div className="space-y-2 rounded-md border p-4">
		<Skeleton className="h-20 w-full" />
		<Separator />
		<div className="py-2 pl-6 pr-8">
			<Skeleton className="h-96 w-full" />
		</div>
	</div>
)

export default SubfieldServiceSkeleton
