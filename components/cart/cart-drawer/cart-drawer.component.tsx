import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function CartDrawerDesktop() {
	return (
		<SheetContent>
			<SheetHeader className='my-8'>
				<SheetTitle>Tu carrito</SheetTitle>
				<SheetDescription className='mt-2'>Tu carrito de compras esta vacío.</SheetDescription>
			</SheetHeader>
		</SheetContent>
	)
}
