import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { CustomPhoneInput } from '@/components/ui/custom-phone-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Login = () => {
	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>
				<CardTitle className='text-center text-2xl font-bold'>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form>
					<div className='flex flex-col gap-6'>
						<div className='grid gap-2'>
							<Label htmlFor='phone'>Phone</Label>
							<CustomPhoneInput />
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password'>Password</Label>
								<a
									href='#'
									className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
								>
									Forgot your password?
								</a>
							</div>
							<Input id='password' type='password' placeholder='' required />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className='grid gap-2 justify-items-center'>
				<Button type='submit' className='w-full' disabled={true}>
					Login
				</Button>

				<span className='w-full h-0.5 bg-accent/40'></span>
				<div className='flex items-center justify-around w-full gap-2'>
					<Button type='submit' className='flex-1'>
						Google
					</Button>
					<Button type='submit' className='flex-1'>
						GitHub
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
}
