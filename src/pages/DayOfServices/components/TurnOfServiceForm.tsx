import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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

const formSchema = z.object({
	price: z.number().int().min(0),
	available: z.boolean(),
})

const TurnOfServiceForm = (props: {
	status: 'available' | 'used'
	price: number
}) => {
	const { price, status } = props

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			price: price,
			available: status === 'available',
		},
	})

	return (
		<Form {...form}>
			<form className="space-y-2">
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
									<Input {...field} className="h-8 w-24 text-sm" />
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
					disabled={!form.formState.isDirty}
				>
					Save
				</Button>
			</form>
		</Form>
	)
}

export default TurnOfServiceForm
