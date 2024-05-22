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
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { updateDayOfServices } from '@/services/day-of-services'
import useFootballFieldStore from '@/stores/football-field'
import { toast } from '@/components/ui/use-toast'
import { useQueryClient } from '@tanstack/react-query'
import { TTimeStep } from '@/types'

const formSchema = z.object({
	price: z
		.string()
		.transform((i) => Number(i))
		.pipe(z.number().int().min(0)),
	available: z.boolean(),
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
			price: price,
			available: status === 'available',
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await updateDayOfServices(_id, field._id, {
				turnOfServices: [
					{
						price: values.price,
						at,
						status: values.available ? 'available' : 'used',
					},
				],
			})

			// Successfully
			toast({
				title: 'Updated successfully',
			})
		} catch (error) {
			toast({
				title: 'Failed to update turn of service',
				variant: 'destructive',
			})
		} finally {
			queryClient.invalidateQueries({ queryKey: ['day-of-services'] })
		}
	}

	return (
		<Form {...form}>
			<form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="available"
					render={({ field }) => (
						<FormItem className="flex items-center justify-between gap-2 ">
							<FormLabel>{field.value ? 'Available' : 'Used'}</FormLabel>
							<FormControl>
								<Switch
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="price"
					render={({ field }) => (
						<FormItem className="flex items-center justify-between gap-2 ">
							<FormLabel>Price</FormLabel>
							<div className="flex items-center gap-2">
								<FormControl>
									<Input
										{...field}
										type="number"
										className="h-8 w-24 text-sm"
									/>
								</FormControl>
								<p>VND</p>
							</div>
						</FormItem>
					)}
				/>
				<Separator />
				<Button
					className="container"
					size="sm"
					type="submit"
					disabled={
						!form.formState.isDirty || form.formState.isSubmitSuccessful
					}
				>
					Save
				</Button>
			</form>
		</Form>
	)
}

export default TurnOfServiceForm
