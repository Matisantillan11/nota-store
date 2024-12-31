import Image from 'next/image'

export default function Render3d() {
	return (
		<div className='relative w-74 h-74 md:w-84 md:h-84 flex items-center justify-center mt-24 md:mt-6 px-10 md:px-0'>
			<div className='w-74 h-74 md:w-84 md:h-84 bg-white blur-3xl rounded-full absolute z-10' />
			<Image
				src='/tshirt-white.png'
				alt='white tshirt model'
				width={905}
				height={540}
				className='absolute bg-clip-content w-[500px] h-[540px] z-20 -bottom-10'
			/>
		</div>
	)
}
