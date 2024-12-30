import BuyButton from '@/components/buy-button'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='w-full h-full px-10 md:px-16 lg:px-36'>
			<div className='flex flex-col items-center justify-between lg:grid lg:grid-cols-12 md:gap-10'>
				<div className='col-span-7 flex flex-col items-center lg:items-start py-6 md:py-14 lg:py-48'>
					<h2 className='text-white text-5xl md:text-6xl max-w-72 md:max-w-full text-center lg:text-start'>
						OVERSIZE T-SHIRT
					</h2>
					<p className='text-white/75 text-sm text-center mt-6 mx-10 lg:mx-0 lg:text-left lg:my-12 lg:mr-10'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>

					<BuyButton className='hidden lg:flex lg:flex-col' />
				</div>
				<div className='relative w-74 h-74 md:w-84 md:h-84 flex items-center justify-center mt-24 md:mt-6'>
					<div className='w-74 h-74 md:w-84 md:h-84 bg-white blur-3xl rounded-full absolute z-10' />
					<Image
						src='/tshirt-white.png'
						alt='white tshirt model'
						width={905}
						height={540}
						className='absolute bg-clip-content w-[500px] h-[540px] z-20 -bottom-10'
					/>
				</div>

				<BuyButton className='grid place-items-center mt-12' />
			</div>
		</div>
	)
}
