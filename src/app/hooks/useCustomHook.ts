'use client'
//This code defines a custom hook called useModal that manages the state of a modal component in a React application using the useState hook.
import { useState } from 'react'

function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggleModal,
  }
}

export default useModal
