import { TSubField } from '@/types'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormItem,
	FormField,
	FormLabel,
	FormControl,
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

const SubfieldEditForm = ({ subfield }: { subfield: TSubField }) => {
	const { name, size, defaultPrice } = subfield

	const form = useForm({
		defaultValues: {
			name: name,
			size: size,
			price: defaultPrice,
		},
	})

	return (
		<Form {...form}>
			<form className="mt-6 w-full space-y-5 px-1 text-start">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">SubField Name</FormLabel>
							<FormControl>
								<Input
									className="px-3 text-base"
									type="text"
									value={field.value}
								/>
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
							<Select value={field.value.toString()}>
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
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Price</FormLabel>
							<FormControl>
								<Input
									className="px-3 text-base"
									type="number"
									value={field.value}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Separator />
				<Button className="w-full rounded text-center text-base">Save</Button>
			</form>
		</Form>
	)
}

export default SubfieldEditForm
