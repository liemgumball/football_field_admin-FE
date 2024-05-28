import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { uploadImage } from '@/services/sub-field'
import { useState } from 'react'
import useSubFieldMutation from '@/hooks/SubFieldDetails/useSubFieldMutation'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/Icons'

const SubFieldImageForm = ({
	id,
	close,
}: {
	id: string
	close: () => void
}) => {
	const [image, setImage] = useState<File | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const { mutateAsync } = useSubFieldMutation(id)

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImage(e.target.files[0])
		}
	}

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!image) {
			throw new Error('Failed to upload file.')
		}

		const formData = new FormData()
		formData.append('image', image)

		try {
			setIsSubmitting(true)
			const url = await uploadImage(formData)
			if (url) {
				await mutateAsync({
					image: url,
				})
			}
		} catch (error) {
			if (error instanceof Error)
				toast({ title: error.message, variant: 'destructive' })

			if (error instanceof Response)
				toast({
					title: 'Failed to update subfield image.',
					variant: 'destructive',
				})
		} finally {
			close()
			setIsSubmitting(false)
		}
	}

	return (
		<form onSubmit={onSubmit} className="mx-auto space-y-3 text-center">
			<div className="max-w-max">
				<Input type="file" accept="image/*" onChange={handleImageChange} />
			</div>
			<Separator />
			<Button type="submit" className="w-full" disabled={!image}>
				{isSubmitting && <Icons.Loader className="mr-1" />}
				Save
			</Button>
		</form>
	)
}

export default SubFieldImageForm
