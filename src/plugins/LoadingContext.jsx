import { createContext, useState } from 'react'
import dynamic from 'next/dynamic'
import presets from '@/utils/globalPresets'

const LoadingSpinner = dynamic(() => { return import('vComponents/dist/Loading') }, { ssr: false })
export const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const loadingWrapper = {
    loading,
    setLoading,
    start: () => { setLoading(true) },
    stop: () => { setLoading(false) }
  }

  return (
    <LoadingContext.Provider value={ loadingWrapper }>
      { children }
      <LoadingSpinner loading={loading} image={presets.images.logo} background={'bg-white'} color={'bg-theme-app-500'} dark={'bg-theme-app-800'} />
    </LoadingContext.Provider>
  )
}

export default LoadingProvider
