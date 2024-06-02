'use client'
import WrapperSessionProvider from './Providers/SessionProvider'
import { Button, LoginForm } from './components'
import getUser from './services/axios'

export default function Home() {
  const handlePress = async () => {
    const response = getUser()
  }

  return (
    <WrapperSessionProvider>
      <LoginForm />
      <Button onClick={handlePress} label="Fetch" />
    </WrapperSessionProvider>
  )
}
