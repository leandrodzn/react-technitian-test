import { useState, useEffect } from 'react'
import './App.css'
import { fetchFact } from './services/fact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const [fact, setFact] = useState()
  const { image } = useCatImage({ fact })

  const getRandomFact = async () => {
    const fact = await fetchFact()
    setFact(fact)
  }

  // Fetch a cat fact on component mount
  useEffect(() => {
    getRandomFact()
  }, [])

  return (
    <main>
      <h1>Cats App</h1>

      <button onClick={getRandomFact}>Get new fact</button>
      <section>
        <article>
          <span>Cat Fact:</span>
          {fact && <p>{fact}</p>}
        </article>
        <article>
          <span>Image:</span>
          {image && (
            <img
              src={image}
              alt={`Image extracted using the first word from ${fact}`}
            />
          )}
        </article>
      </section>
    </main>
  )
}
