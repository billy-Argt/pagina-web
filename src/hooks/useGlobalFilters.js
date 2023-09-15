import { useState, useEffect } from 'react'
import functions from 'v-functions'

const safeGetPathname = () => {
  return typeof window !== 'undefined' ? window.location.pathname : ''
}

const useGlobalFilters = () => {
  const [rutaActual, setRutaActual] = useState(safeGetPathname())

  useEffect(() => {
    setRutaActual(safeGetPathname())
  }, [safeGetPathname()])

  const getFiltersFromLocalStorage = () => {
    const storedFilters = functions.getDecodeStorage('globalFilters')
    const parsedFilters = storedFilters ? JSON.parse(storedFilters) : {}
    return parsedFilters[rutaActual] || {}
  }

  const setFilters = (keyOrObject, value) => {
    const prevFilters = getFiltersFromLocalStorage()
    let updatedFilters

    if (typeof keyOrObject === 'object' && value === undefined) {
      updatedFilters = { ...prevFilters, ...keyOrObject }
    } else {
      updatedFilters = { ...prevFilters, [keyOrObject]: value }
    }

    const storedFilters = functions.getDecodeStorage('globalFilters')
    const globalFilters = storedFilters ? JSON.parse(storedFilters) : {}
    functions.setEncodeStorage(
      'globalFilters',
      JSON.stringify({ ...globalFilters, [rutaActual]: updatedFilters })
    )
  }

  const clearFiltersForRoute = () => {
    const storedFilters = functions.getDecodeStorage('globalFilters')
    const globalFilters = storedFilters ? JSON.parse(storedFilters) : {}
    functions.setEncodeStorage('globalFilters', JSON.stringify({ ...globalFilters, [rutaActual]: {} }))
  }

  const clearAllFilters = () => {
    functions.setEncodeStorage('globalFilters', JSON.stringify({}))
  }

  const filters = getFiltersFromLocalStorage()

  return [filters, setFilters, clearFiltersForRoute, clearAllFilters]
}

export default useGlobalFilters
