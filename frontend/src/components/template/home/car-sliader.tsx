'use client'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { CaruselPaggination } from '@/components/ui/custom-carusel-paggination'

import { cn } from '@/shared/utils/twMerge'

export const CarSlider = () => {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) {
			return
		}

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	return (
		<section className={cn('flex justify-center')}>
			<Carousel
				setApi={setApi}
				plugins={[
					Autoplay({
						delay: 5000
					})
				]}
				className='relative w-full'
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className='basis-1/1'>
							<Image
								src={`/assets/images/cars/Porshe-${index + 1}.jpg`}
								width={1500}
								height={1300}
								alt='porshe'
								sizes='100%'
								className='bg-accent h-[800] w-full rounded-2xl object-cover max-xl:h-[700] max-lg:h-[600] max-md:h-[500] max-sm:h-[300]'
								placeholder='blur'
								blurDataURL={`/assets/images/cars/Porshe-${index + 1}.jpg`}
								preload={true}
								//priority
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					className={cn('max-sm:hidden', 'bg-background/80 left-2')}
				/>
				<CarouselNext
					className={cn('max-sm:hidden', 'bg-background/80 right-2')}
				/>
				<CaruselPaggination
					scrollTo={api?.scrollTo}
					count={count}
					current={current}
				/>
			</Carousel>
		</section>
	)
}
