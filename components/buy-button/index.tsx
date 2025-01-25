'use client'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

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
		<div className={cn('relative inline-flex group', className)}>
			<div className='absolute transitiona-all duration-500 opacity-70 -inset-px bg-neutral-100 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
			<Button
				variant='ghost'
				className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-200 bg-gray-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-full'
				onClick={handleAttemptPurchase}>
				Comprar por $24999
			</Button>
		</div>
	)
}
