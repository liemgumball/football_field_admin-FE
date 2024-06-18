import { z } from 'zod'
import { TFootballField } from '@/types'
import { useOutletContext } from 'react-router-dom'

import { Input } from '@/components/ui/input'
import {
	Form,
	FormItem,
	FormField,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Icons } from '@/components/Icons'
import { updateFootballField } from '@/services/football-field'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'
import MapInput from './components/MapInput'

const FieldLocation = () => {
	const field = useOutletContext<TFootballField>()
	const queryClient = useQueryClient()

	const formSchema = z.object({
		name: z.string().min(10),
		coordinates: z.tuple([z.number(), z.number()]),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: field.location.name,
			coordinates: field.location.geo.coordinates,
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
		values,
	) => {
		try {
			await updateFootballField(field._id, {
				location: {
					name: values.name,
					geo: { type: 'Point', coordinates: values.coordinates },
				},
			})

			toast({
				title: 'Updated successfully.',
			})
		} catch (error) {
			if (error instanceof Response) {
				toast({
					title: 'Failed to update.',
				})
			}
		} finally {
			queryClient.invalidateQueries()
		}
	}

	const { isSubmitting, isDirty } = form.formState

	return (
		<div>
			<Form {...form}>
				<form
					className="mt-6 w-full space-y-5 px-1 text-start"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Address</FormLabel>
								<FormControl>
									<Input className="px-3 text-base" type="text" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="coordinates"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Coordinates</FormLabel>
								<FormControl>
									<MapInput coordinates={field.value} onMove={field.onChange} />
								</FormControl>
							</FormItem>
						)}
					/>

					<Separator />
					<Button
						type="submit"
						disabled={isSubmitting || !isDirty}
						className="w-full rounded text-center text-base"
					>
						{isSubmitting && <Icons.Loader className="mr-1" />}
						Save
					</Button>
					<FormMessage>{form.formState.errors.root?.message}</FormMessage>
				</form>
			</Form>
		</div>
	)
}

export default FieldLocation
