import { createSupabaseClient } from '../client'

async function signInWithGoogle() {
	const supabase = await createSupabaseClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	if (!session) {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:3000/auth/v1/callback',
			},
		})

		if (error) {
			throw new Error(`Error signing in with Google: ${error.message}`)
		}
	}
}

export { signInWithGoogle }
