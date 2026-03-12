import { LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '@/components/ui/button'

import { cn } from '@/shared/utils/twMerge'

interface IHeaderProps {
	className?: string
}

const links = [
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'Home',
		href: '/'
	},
	{
		text: 'Home',
		href: '/'
	}
]

export const RoutesList = () => {
	return <></>
}

export const Header: FC<IHeaderProps> = ({ className }) => {
	return (
		<header
			className={cn(
				className,
				'border-border h-16 w-full border-b-2 sm:p-2'
			)}
		>
			<nav className='flex h-full items-center justify-between'>
				<Link
					href='/'
					className='flex items-center gap-2 transition-opacity hover:opacity-90'
				>
					<Image
						src='/assets/images/logo.jpg'
						alt='Next Pizza Logo'
						width={45}
						height={45}
						priority
						className='aspect-square rounded-full object-cover'
					/>
					<div>
						<h1 className='text-2xl/6 font-bold tracking-tight uppercase max-sm:text-xl/6'>
							Next Pizza
						</h1>
						<p className='text-sm leading-3 text-gray-400'>
							онлайн пицца
						</p>
					</div>
				</Link>

				<RoutesList />

				<Link href='/auth/login' className='display'>
					<Button size={'lg'} className='flex items-center gap-2 text-lg'>
						<LogIn /> <strong className=''>Login</strong>
					</Button>
				</Link>
			</nav>
		</header>
	)
}
