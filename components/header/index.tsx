import Image from 'next/image'
import CartButton from '../cart/cart-button/cart-button.component'
import CartDrawer from '../cart/cart-drawer/cart-drawer.component'
import Auth from './auth.component'

export default async function Header() {
	return (
		<header className='flex items-center justify-between py-8 px-10 md:px-16 lg:px-36'>
			<Image src='/nota-logo.svg' alt='not available logo' width={145} height={35} className='bg-clip-content' />
			<div className='flex items-center gap-6'>
				<CartButton>
					<CartDrawer />
				</CartButton>
				<Auth />
			</div>
		</header>
	)
}
