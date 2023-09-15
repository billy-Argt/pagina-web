import { useState, useEffect } from 'react'

export default function useDocumentVisibility () {
  const [isVisible, setIsVisible] = useState(document.visibilityState === 'visible')

  const onVisibilityChange = () => {
    setIsVisible(document.visibilityState === 'visible')
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return isVisible
}
