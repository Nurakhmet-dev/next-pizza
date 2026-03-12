'use client'
import { FC } from 'react'

import { cn } from '@/shared/utils/twMerge'

interface ICaruselPaggination {
	count: number
	current: number
	scrollTo?: (index: number, jump?: boolean) => void
}

export const CaruselPaggination: FC<ICaruselPaggination> = ({
	count,
	current,
	scrollTo
}) => {
	return (
		<div
			className={cn(
				'absolute bottom-4 left-[50%] -translate-x-[50%] rounded-full bg-neutral-950/50',
				'flex gap-2 p-1.5'
			)}
		>
			{Array.from({ length: count }).map((_, id) => {
				return (
					<button
						onClick={() => {
							scrollTo?.(id)
						}}
						key={id}
						className={cn(
							'transition-all duration-300',
							'size-2 cursor-pointer rounded-full bg-amber-50/40',
							id == current - 1 ? 'w-5 bg-amber-50/80' : ''
						)}
					></button>
				)
			})}
		</div>
	)
}
