import { useState, useEffect } from 'react'

const FACT_API_ENDPOINT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('')

  // Fetch a random cat fact from the API
  const fetchFact = async () => {
    const response = await fetch(FACT_API_ENDPOINT)
    const data = await response.json()
    setFact(data.fact)
  }

  // Fetch a cat fact on component mount
  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <main>
      <h1>Cats App</h1>
      <span>Cat Fact:</span>
      <p>{fact}</p>
    </main>
  )
}
