import { TSubField } from '@/types'
import { useForm } from 'react-hook-form'
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
import {
	Select,
	SelectGroup,
	SelectContent,
	SelectValue,
	SelectTrigger,
	SelectItem,
} from '@/components/ui/select'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import useSubFieldMutation from '../hooks/useSubFieldMutation'
import { Icons } from '@/components/Icons'

const sizeSchema = z.enum(['5', '6', '7', '11'])

const formSchema = z.object({
	name: z.string().min(2),
	size: sizeSchema,
	defaultPrice: z.number().int().min(0),
})

const SubFieldEditForm = ({
	subfield,
	close,
}: {
	subfield: TSubField
	close: () => void
}) => {
	const { name, size, defaultPrice } = subfield

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: name,
			size: size.toString() as z.infer<typeof sizeSchema>,
			defaultPrice: defaultPrice,
		},
	})

	const { mutateAsync } = useSubFieldMutation(subfield._id)

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await mutateAsync({ ...values, size: values.size.toString() })
			close()
		} catch (error) {
			form.setError('root', {
				message: 'Failed to update Subfield',
			})
		}
	}

	const { isSubmitting, isDirty } = form.formState

	return (
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
							<FormLabel className="text-base">SubField Name</FormLabel>
							<FormControl>
								<Input className="px-3 text-base" type="text" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="size"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Size</FormLabel>
							<Select value={field.value} onValueChange={field.onChange}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select field size" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="5">5</SelectItem>
										<SelectItem value="6">6</SelectItem>
										<SelectItem value="7">7</SelectItem>
										<SelectItem value="11">11</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="defaultPrice"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Price</FormLabel>
							<FormControl>
								<Input className="px-3 text-base" type="number" {...field} />
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
	)
}

export default SubFieldEditForm
