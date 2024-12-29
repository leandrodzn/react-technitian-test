import { useState, useEffect } from 'react'

const FACT_API_ENDPOINT = 'https://catfact.ninja/fact'
const IMAGE_API_ENDPOINT = 'https://cataas.com/cat/says/:word?width=1000'

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
      recoverFirstWord(fact)
    } catch (error) {
      setFact('')
    }
  }

  const recoverFirstWord = (fact) => {
    const firstWord = fact.split(' ')[0]

    const imageUrl = IMAGE_API_ENDPOINT.replace(':word', firstWord)
    setImage(imageUrl)
  }

  // Fetch a cat fact on component mount
  useEffect(() => {
    fetchFact()
  }, [])

  return (
    <main>
      <h1>Cats App</h1>
      <span>Cat Fact:</span>
      {fact && <p>{fact}</p>}
      <span>Image: </span>
      {image && <img src={image} alt={`Image extracted using the first word from ${fact}`} />}
    </main>
  )
}
