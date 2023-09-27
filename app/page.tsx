import Image from 'next/image'
import getCurrentUser  from './actions/getCurrentUser'

export default async function Home() {
  const currentUser = await getCurrentUser()

  return (
    <div className='text-center'>
      { currentUser ? <div>認証中</div>:<div>未認証</div>}
    </div>
  )
}
