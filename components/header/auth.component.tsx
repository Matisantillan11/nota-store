'use client'
import { useState } from 'react'
import { User } from '@supabase/supabase-js'

import Avatar from '../ui/avatar'
import getSessionUser from '@/lib/supabase/actions/session.actions'
import SignInButton from '../signin-button'

export default function Auth() {
	const [user, setUser] = useState<User | undefined>(undefined)
	getSessionUser().then((userSession) => setUser(userSession))

	return (
		<>
			{user ? (
				<Avatar
					src={user?.user_metadata?.avatar_url}
					alt={`${user?.user_metadata?.full_name.toLowerCase().replaceAll(' ', '-')}-avatar`}
				/>
			) : (
				<SignInButton />
			)}
		</>
	)
}
