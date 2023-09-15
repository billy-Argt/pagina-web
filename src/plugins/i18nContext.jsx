import { createContext, useState, useRef, useEffect } from 'react'
import rosetta from 'rosetta'
// import rosetta from 'rosetta/debug'
import { execute } from '@/helper/clientApi'
import useHasMounted from '@/hooks/useHasMounted'
import environment from '@/utils/environment'
import { sprCatalogosS } from '@/utils/spr'
import { getEnv } from '@/utils/funciones'

const i18n = rosetta()

export const defaultLanguage = 'es'
export const languages = ['es', 'en']
export const contentLanguageMap = { es: 'es-GT', en: 'en-US' }

export const I18nContext = createContext()

// default language
i18n.locale(defaultLanguage)

const I18nProvider = ({ children, locale = 'es', dict }) => {
  const activeLocaleRef = useRef(locale || defaultLanguage)
  const [, setTick] = useState(0)
  const firstRender = useRef(true)
  const [langIsLoaded, setLangIsLoaded] = useState(false)
  const hasMounted = useHasMounted()

  const i18nWrapper = {
    activeLocale: activeLocaleRef.current,
    langIsLoaded,
    t: (...args) => i18n.t(...args),
    locale: (l, dict) => {
      i18n.locale(l)
      activeLocaleRef.current = l
      if (dict) {
        i18n.set(l, dict)
      }
      // force rerender to update view
      setTick((tick) => tick + 1)
    }
  }

  const setLanguage = async () => {
    let msgs = {}
    const env = await environment.getEnvUser()
    const response2 = await execute('SPR_PROY_SESION_S', [env.token])
    if (response2 && response2[0] && response2[0].status !== 'ERROR') {
      const options = await execute(sprCatalogosS, ['datosUsuario', await getEnv(i18n), null, null, null])
      locale = options[0].idioma
    } else {
      locale = defaultLanguage
    }
    // si la app ya esta renderizada se cargan los textos
    if (hasMounted) {
      const i18nDb = await execute('SPR_I18N_T', [locale])

      // Verifica si i18nDb es un array antes de llamar a reduce.
      if (Array.isArray(i18nDb)) {
        msgs = i18nDb.reduce((obj, elm) => {
          obj[elm.id_mensaje_padre] = { ...obj[elm.id_mensaje_padre], [elm.id_mensaje]: elm.mensaje }
          return obj
        }, {})
      } else {
        console.error('Error al cargar los datos de i18n:', i18nDb)
      }
    }
    i18nWrapper.locale(locale, msgs)
    setLangIsLoaded(true)
  }

  // for initial SSR render
  if (locale && firstRender.current === true) {
    firstRender.current = false
    setLanguage()
  }

  // // when locale is updated
  // useEffect(() => {
  //   setLanguage()
  // }, [activeLocaleRef.current])

  // when page is mounted
  useEffect(() => {
    if (hasMounted) {
      setLanguage()
    }
  }, [hasMounted, activeLocaleRef.current])

  return (
    <I18nContext.Provider value={i18nWrapper}>{children}</I18nContext.Provider>
  )
}

export default I18nProvider
