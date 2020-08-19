import { useState } from 'react'

export const useModal = () => {
  const [visible, toggleVisble] = useState(false)

  return {
    visible,
    toggleVisble,
  }
}
