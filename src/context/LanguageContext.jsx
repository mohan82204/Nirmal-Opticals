import React, { createContext, useContext, useState } from 'react'
import translations from '../i18n/translations'

const LanguageContext = createContext(null)

/**
 * Wraps the app. Tamil ('ta') is the default/primary language.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ta')

  /** t(section, key) → string in current language */
  const t = (section, key) => {
    const node = translations[section]?.[key]
    if (!node) return key
    return node[lang] ?? node.en ?? key
  }

  /** tArr(section, key) → array for the current language */
  const tArr = (section, key) => {
    const node = translations[section]?.[key]
    if (!node) return []
    return node[lang] ?? node.en ?? []
  }

  /** tItem(item, key) → string from a translation object literal */
  const tItem = (obj, key = null) => {
    if (!obj) return ''
    const node = key ? obj[key] : obj
    if (!node) return ''
    return node[lang] ?? node.en ?? ''
  }

  const toggleLang = () => setLang(l => (l === 'ta' ? 'en' : 'ta'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tArr, tItem }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
