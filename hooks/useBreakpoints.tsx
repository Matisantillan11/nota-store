import { useEffect, useState } from 'react'

export default function useBreakpoint() {
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		if (!window) {
			console.error('Window is not defined. This hook must be used in a client component.')
		}

		if (window.innerWidth < 768) {
			setIsMobile(true)
			setIsTablet(false)
			setIsDesktop(false)
		} else if (window.innerWidth < 1024) {
			setIsMobile(false)
			setIsTablet(true)
			setIsDesktop(false)
		} else {
			setIsMobile(false)
			setIsTablet(false)
			setIsDesktop(true)
		}
	}, [window])

	return { isMobile, isTablet, isDesktop }
}
