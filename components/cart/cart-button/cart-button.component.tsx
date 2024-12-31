import { ShoppingBag } from 'lucide-react'

import { theme } from '@/constants'
import { Sheet, SheetTrigger } from '../../ui/sheet'

import { ReactNode } from 'react'

interface CartButtonProps {
	children: ReactNode
}

export default function CartButton({ children }: CartButtonProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<ShoppingBag size={24} color={theme.white} />
			</SheetTrigger>

			{children}
		</Sheet>
	)
}
