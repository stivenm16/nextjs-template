'use client'
import { Button, LoginForm } from './components'
import getUser from './services/axios'

export default function Home() {
  const handlePress = async () => {
    const response = getUser()
  }

  return (
    <>
      <LoginForm />
      <Button onClick={handlePress} label="Fetch" />
    </>
  )
}
