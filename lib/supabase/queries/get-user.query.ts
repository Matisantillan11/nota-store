import { createSupabaseClient } from '../client'

export default async function getUser() {
	const supabase = await createSupabaseClient()

	const {
		data: { session },
	} = await supabase.auth.getSession()

	console.log({ sessionF: session })
	if (session) {
		return session?.user
	}

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return user
}
