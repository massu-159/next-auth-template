import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/navigation/Navigation'
import AuthContext from './context/AuthContext'
import SignupModal from '@/app/components/modals/SignupModal'
import LoginModal from '@/app/components/modals/LoginModal'
import ProfileModal from '@/app/components/modals/ProfileModal'
import getCurrentUser from './actions/getCurrentUser'
import ToasterContext from './context/ToasterContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Toaster */}
        <ToasterContext></ToasterContext>
        {/* Modal */}
        <SignupModal></SignupModal>
        <LoginModal></LoginModal>
        <ProfileModal currentUser={currentUser}></ProfileModal>

        <AuthContext>
          <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <Navigation currentUser={currentUser}></Navigation>
            <main className="container mx-auto max-w-screen-sm flex-1 px-1 py-5">{children}</main>
            <footer className='py-5'>
              <div className="text-center text-sm">
                Copyright ©︎ All rights reserved | massu-159
              </div>
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  )
}
