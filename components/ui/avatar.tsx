import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface AvatarProps {
	src: string | StaticImport
	alt: string
}

export default function Avatar({ src, alt }: AvatarProps) {
	return (
		<div className='rounded-full border-2 border-neutral-100 overflow-hidden'>
			<Image width={40} height={40} src={src} alt={alt} />
		</div>
	)
}
