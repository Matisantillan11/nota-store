import { createSupabaseServerClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url)
	const code = searchParams.get('code')
	const accessToken = searchParams.get('access_token')
	const refreshToken = searchParams.get('refresh_token')

	// if "next" is in param, use it as the redirect URL
	const next = searchParams.get('next') ?? '/'

	if (accessToken && refreshToken) {
		const supabase = await createSupabaseServerClient()
		supabase.auth.setSession({
			access_token: accessToken,
			refresh_token: refreshToken,
		})
	}

	if (code) {
		const supabase = await createSupabaseServerClient()
		const { error } = await supabase.auth.exchangeCodeForSession(code)

		if (!error) {
			const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
			const isLocalEnv = process.env.NODE_ENV === 'development'
			if (isLocalEnv) {
				// we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
				return NextResponse.redirect(`${origin}${next}`)
			} else if (forwardedHost) {
				return NextResponse.redirect(`https://${forwardedHost}${next}`)
			} else {
				return NextResponse.redirect(`${origin}${next}`)
			}
		}
	}

	// return the user to an error page with instructions
	return NextResponse.redirect(`${origin}/session`)
}
