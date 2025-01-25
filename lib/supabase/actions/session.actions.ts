import { createSupabaseClient } from '../client'

export default async function getSessionUser() {
	const supabase = await createSupabaseClient()
	const {
		data: { session },
	} = await supabase.auth.getSession()

	return session?.user
}
