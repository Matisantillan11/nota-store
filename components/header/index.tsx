import Image from 'next/image'
import CartButton from '../cart/cart-button/cart-button.component'
import CartDrawerDesktop from '../cart/cart-drawer/cart-drawer.component'

export default function Header() {
	return (
		<header className='flex items-center justify-between py-8 px-10 md:px-16 lg:px-36'>
			<Image src='/nota-logo.svg' alt='not available logo' width={135} height={35} className='bg-clip-content' />
			<CartButton>
				<CartDrawerDesktop />
			</CartButton>
		</header>
	)
}
