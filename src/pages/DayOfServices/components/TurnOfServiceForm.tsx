import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { updateDayOfServices } from '@/services/day-of-services'
import useFootballFieldStore from '@/stores/football-field'
import { toast } from '@/components/ui/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TTimeStep } from '@/types'

const formSchema = z.object({
	at: z.string(),
	price: z.union([
		z.number().int().min(0),
		z
			.string()
			.transform((i) => Number(i))
			.refine((i) => i > 0 && Number.isInteger(i)),
	]),
	status: z.enum(['available', 'used']),
})

const TurnOfServiceForm = (props: {
	at: TTimeStep
	status: 'available' | 'used'
	price: number
	_id: string
}) => {
	const { price, status, _id, at } = props
	const field = useFootballFieldStore((state) => state.field)
	const queryClient = useQueryClient()

	if (!field) throw new Error('Field not found')

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			at: at,
			price: price,
			status: status,
		},
	})

	const { mutateAsync } = useMutation({
		mutationFn: (data: z.infer<typeof formSchema>) =>
			updateDayOfServices(_id, field._id, { turnOfServices: [data] }),
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: ['day-of-services'] }),
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await mutateAsync(values)

			// Successfully
			toast({
				title: 'Updated successfully',
			})
		} catch (error) {
			toast({
				title: 'Failed to update turn of service',
				variant: 'destructive',
			})
		}
	}

	return (
		<Form {...form}>
			<form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="status"
					render={({ field }) => (
						<FormItem className="flex items-center justify-between gap-2 capitalize">
							<FormLabel>{field.value}</FormLabel>
							<FormControl>
								<Switch
									checked={field.value === 'available'}
									onCheckedChange={(e) =>
										field.onChange(e ? 'available' : 'used')
									}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center justify-between gap-1">
								<FormLabel>Price</FormLabel>
								<div className="flex items-center gap-2">
									<FormControl>
										<Input
											{...field}
											type="number"
											className="h-8 w-24 text-sm"
										/>
									</FormControl>
									<span>VND</span>
								</div>
							</div>
							<FormMessage className="text-end" />
						</FormItem>
					)}
				/>
				<Separator />
				<Button
					className="container"
					size="sm"
					type="submit"
					disabled={!form.formState.isDirty || form.formState.isSubmitting}
				>
					Save
				</Button>
			</form>
		</Form>
	)
}

export default TurnOfServiceForm
