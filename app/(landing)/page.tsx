import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div >
        <Link href="/sign-in" className='mr-4'>
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default page
