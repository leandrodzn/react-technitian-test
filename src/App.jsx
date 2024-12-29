import { useState, useEffect } from 'react'
import './App.css'

const FACT_API_ENDPOINT = 'https://catfact.ninja/fact'
const IMAGE_API_ENDPOINT = 'https://cataas.com/cat/says/:word'

export function App () {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()

  // Fetch a random cat fact from the API
  const fetchFact = async () => {
    try {
      const response = await fetch(FACT_API_ENDPOINT)
      const data = await response.json()

      const { fact } = data
      setFact(fact)
    } catch (error) {
      // TODO: Handle error fact
    }
  }

  const recoverFirstWord = (fact) => {
    const firstWord = fact.split(' ')[0]

    return firstWord
  }

  const fetchImage = async (word) => {
    try {
      const response = await fetch(IMAGE_API_ENDPOINT.replace(':word', word))
      const data = await response.blob()

      const imageUrl = URL.createObjectURL(data)
      setImage(imageUrl)
    } catch (error) {
      // TODO: Handle error image
    }
  }

  // Fetch a cat fact on component mount
  useEffect(() => {
    fetchFact()
  }, [])

  // Recover the first word from the fact and fetch an image
  useEffect(() => {
    if (fact) {
      const firstWord = recoverFirstWord(fact)
      fetchImage(firstWord)
    }
  }, [fact])

  return (
    <main>
      <h1>Cats App</h1>

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
