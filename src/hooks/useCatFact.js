import { useState, useEffect } from 'react'
import { fetchFact } from './services/fact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    const fact = await fetchFact()
    setFact(fact)
  }

  // Fetch a cat fact on component mount
  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
