import { Icons } from '@/components/Icons'
import RatingItem from '@/components/RatingItem'
import {
	getFootballField,
	updateFootballField,
} from '@/services/football-field'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense, useMemo, useState } from 'react'
import OverviewTab from './tabs/OverViewTab'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { getAnalytic } from '@/mocks/analytic-data'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'
import ChatBox from '@/components/ChatBox'

const FieldOverView = () => {
	const { hash } = useLocation()
	const [isOpen, setIsOpen] = useState(false)
	const { fieldId } = useParams()

	if (!fieldId) throw new Error('Field Id not specified!')

	const queryClient = useQueryClient()

	const {
		isLoading,
		isError,
		error,
		data: field,
	} = useQuery({
		queryKey: ['football-fields', fieldId],
		queryFn: () => getFootballField(fieldId),
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['football-fields', fieldId],
		mutationFn: (isActive: boolean) =>
			updateFootballField(fieldId, { isActive }),
		onMutate: () => setIsOpen(false),
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: ['football-fields', fieldId] }),
		onError: (e) => {
			if (e instanceof Response)
				toast({
					title: 'Failed to deactivate.',
					variant: 'destructive',
				})
		},
	})

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const analytic = useMemo(() => getAnalytic(), [field?._id])

	if (isLoading) return <Icons.Loader size={64} className="container" />

	if (isError)
		return (
			<h2 className="text-xl font-semibold text-destructive">
				{error.message}
			</h2>
		)

	if (!field)
		return (
			<p className="text-base text-muted-foreground">
				No football field found!
			</p>
		)

	return (
		<div className="mt-4 space-y-4">
			<header className="flex items-center justify-between gap-4">
				<div className="space-y-2">
					<h1>{field.name}</h1>
					<RatingItem rating={field.rating} />
				</div>
				<div className="flex items-center gap-2">
					<Label
						htmlFor="active-mode"
						className={
							isPending || !field.isActive ? 'text-muted-foreground' : ''
						}
					>
						{isPending && <Icons.Loader className="mr-1 inline-block" />}

						{field.isActive ? 'Active' : 'Inactive'}
					</Label>
					<Dialog open={isOpen} onOpenChange={setIsOpen}>
						<Switch
							id="active-mode"
							checked={field.isActive}
							onCheckedChange={(checked) => {
								if (!checked) {
									setIsOpen(true)
								} else mutate(true)
							}}
						/>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>
									Deactivate the current Football Field?
								</DialogTitle>
								<DialogDescription>
									This will turn off the activity of this Football Field in the
									system.
								</DialogDescription>
								<DialogFooter>
									<Button className="mt-4" onClick={() => mutate(false)}>
										Deactivate
									</Button>
								</DialogFooter>
							</DialogHeader>
						</DialogContent>
					</Dialog>

					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="ghost" size="icon" asChild>
									<Link to={`/admin/fields/${field._id}`} target="_blank">
										<ExternalLinkIcon size={20} />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Manage {field.name}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			</header>

			<Tabs defaultValue={hash ? hash.slice(1) : ''} className="space-y-4">
				<TabsList>
					<TabsTrigger value="">Overview</TabsTrigger>
					<TabsTrigger value="chats">Chats</TabsTrigger>
					<TabsTrigger value="reports" disabled>
						Reports
					</TabsTrigger>
				</TabsList>

				<Suspense
					fallback={<Icons.Loader size={60} className="container my-16" />}
				>
					<TabsContent value="">
						<OverviewTab {...analytic} />
					</TabsContent>
					<TabsContent value="chats">
						<ChatBox receiverId={field.adminId} />
					</TabsContent>
					<TabsContent value="analytics"></TabsContent>
				</Suspense>
			</Tabs>
		</div>
	)
}

export default FieldOverView
