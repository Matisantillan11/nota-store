import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
	let supabaseResponse = NextResponse.next()

	const supabase = await createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll()
				},
				setAll(cookiesToSet) {
					console.log({ cookiesToSet })
					cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
					supabaseResponse = NextResponse.next({
						request,
					})
					cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
				},
			},
		},
	)

	// refreshing the auth token
	const { data: session, error } = await supabase.auth.getSession()
	if (error) {
		console.error('Error retrieving session:', error)
	}

	if (!session) {
		await supabase.auth.signOut()
	}

	return supabaseResponse
}
