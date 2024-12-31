import BuyButton from '@/components/buy-button'
import Render3d from '@/components/render-3d'

export default function Home() {
	return (
		<div className='w-full h-full md:px-16 lg:px-36 flex flex-col items-center justify-between lg:grid lg:grid-cols-12 md:gap-10 py-6 md:py-14 lg:py-24'>
			<div className='col-span-7 flex flex-col items-center lg:items-start py-6 md:py-14 lg:py-16'>
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

			<Render3d />

			<BuyButton className='grid place-items-center mt-12 lg:hidden' />
		</div>
	)
}
