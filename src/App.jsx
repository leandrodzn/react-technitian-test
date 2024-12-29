import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  return (
    <main>
      <h1>Cats App</h1>

      <button onClick={refreshFact}>Get new fact</button>
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
