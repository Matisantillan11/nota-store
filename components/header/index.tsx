import { theme } from '@/constants'
import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex items-center justify-between py-8 px-10 md:px-16 lg:px-36'>
			<Image src='/nota-logo.svg' alt='not available logo' width={125} height={35} className='bg-clip-content' />
			<ShoppingBag size={24} color={theme.white} />
		</header>
	)
}
