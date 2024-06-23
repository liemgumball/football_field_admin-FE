import { CheckIcon, Loader2Icon, RefreshCwIcon, StarIcon } from 'lucide-react'
import logo from '/football-icon.svg'
import { cn } from '@/lib/utils'

export const Icons = {
	/**
	 * @default
	 * width: 70  height: 70
	 */
	Logo: ({ height, width }: { height?: number; width?: number }) => (
		<img
			className="min-w-[70px]"
			src={logo}
			alt="logo"
			height={height || 70}
			width={width || 70}
		/>
	),

	Loader: ({ size = 18, className }: { size?: number; className?: string }) => (
		<Loader2Icon className={cn('animate-spin', className)} size={size} />
	),

	Refresh: ({
		size = 18,
		className,
		isFetching,
	}: {
		size?: number
		className?: string
		isFetching?: boolean
	}) => (
		<RefreshCwIcon
			size={size}
			className={cn(isFetching ? 'animate-spin' : '', className)}
		/>
	),

	Success: ({
		size = 18,
		className,
	}: {
		size?: number
		className?: string
	}) => (
		<CheckIcon
			size={size}
			className={cn('animate-bounce-once text-primary', className)}
		/>
	),
	Rating: (props: { size?: number; color?: string; className?: string }) => (
		<StarIcon {...props} />
	),
}
