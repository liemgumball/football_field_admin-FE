import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const buttonStatusStyles = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			status: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				confirmed: 'bg-green-500 text-white hover:bg-green-500/90',
				canceled: 'bg-red-500 text-white hover:bg-red-500/90',
				pending: 'bg-yellow-500 text-white hover:bg-yellow-500/90',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			status: 'default',
			size: 'default',
		},
	},
)

type buttonStatusProps = VariantProps<typeof buttonStatusStyles> &
	ComponentProps<'button'>

const ButtonStatus = ({
	status,
	size,
	className,
	...props
}: buttonStatusProps) => {
	return (
		<button
			{...props}
			className={cn(buttonStatusStyles({ status, size }), className)}
		/>
	)
}

export default ButtonStatus
