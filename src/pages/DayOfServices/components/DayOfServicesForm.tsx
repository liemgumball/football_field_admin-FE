import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { formatDate } from '@/utils/date'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const DayOfServicesForm = () => {
	const formSchema = z.object({
		date: z.date(),
		size: z
			.enum(['5', '6', '7', '11', 'undefined'])
			.transform((val) => (val === 'undefined' ? undefined : val))
			.optional(),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			date: new Date(),
		},
	})

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
		const searchParams = new URLSearchParams()
		searchParams.set('date', formatDate(values.date))
	}

	return (
		<Form {...form}>
			<form onChange={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="date"
					render={({ field }) => (
						<FormItem>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											size="lg"
											variant={'outline'}
											className={cn(
												'flex h-11 min-w-[220px] text-left font-normal',
												!field.value && 'text-muted-foreground',
											)}
										>
											{field.value ? (
												format(field.value, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	)
}

export default DayOfServicesForm
