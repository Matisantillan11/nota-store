'use client'

import { createSupabaseClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { toast } from 'sonner'

export default function SessionHandler() {
	const handleSupabaseSession = useCallback(async () => {
		if (window !== undefined) {
			const fragment = window.location.hash.substring(1)
			const params = new URLSearchParams(fragment)

			const accessToken = params?.get('access_token')
			const refreshToken = params?.get('refresh_token')

			if (!accessToken || !refreshToken) {
				toast.error('No pudimos iniciar sesión, por favor intenta de nuevo más tarde.')
			}

			const supabase = await createSupabaseClient()
			supabase.auth.setSession({
				access_token: accessToken as string,
				refresh_token: refreshToken as string,
			})

			redirect('/')
		}
	}, [])

	useEffect(() => {
		handleSupabaseSession()
	})
}
