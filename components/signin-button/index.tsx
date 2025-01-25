'use client'
import { signInWithGoogle } from '@/lib/supabase/actions/auth-client.actions'
import { Button } from '../ui/button'

export default function SignInButton() {
	return (
		<Button variant='outline' onClick={signInWithGoogle} size='default' className='rounded-full'>
			Ingresar
		</Button>
	)
}
