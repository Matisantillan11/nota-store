'use client'
import { toast } from 'sonner'
import { Button } from '../ui/button'

interface BuyButtonProps {
	className?: string
}

export default function BuyButton({ className }: BuyButtonProps) {
	const handleAttemptPurchase = () => {
		toast.info(
			'Te gusta nuestro producto? Actualmente, la opción de compra no está disponible, pero estamos trabajando para que puedas adquirirlo muy pronto.',
		)
	}

	return (
		<div className={className}>
			<Button variant='outline' className='rounded-full' onClick={handleAttemptPurchase}>
				Comprar por $24999
			</Button>
		</div>
	)
}
