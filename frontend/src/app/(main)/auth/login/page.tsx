import Image from 'next/image'

import { Login } from '@/components/form/auth/login'

import { cn } from '@/shared/utils/twMerge'

export default () => {
	return (
		<section className='flex h-full w-full flex-wrap gap-5'>
			<div
				className={cn(
					'bg-accent/10 border-accent flex w-full flex-1 items-center justify-center rounded-2xl border-2',
					'max-sm:bg-background max-sm:border-none'
				)}
			>
				<Login />
			</div>
			<div className='bg-accent flex w-full flex-1 items-center justify-center overflow-hidden rounded-2xl max-sm:hidden'>
				<Image
					src={'/assets/images/auth-bg.jpg'}
					alt='Pizza'
					width={30000}
					height={20000}
					className='h-full object-cover object-left'
				/>
			</div>
		</section>
	)
}
