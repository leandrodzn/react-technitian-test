import { useState, useEffect } from 'react'

const IMAGE_API_ENDPOINT = 'https://cataas.com/cat/says/:word'

export const useCatImage = ({ fact }) => {
  const [image, setImage] = useState()

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

  // Recover the first word from the fact and fetch an image
  useEffect(() => {
    if (fact) {
      const firstWord = recoverFirstWord(fact)
      fetchImage(firstWord)
    }
  }, [fact])

  return { image }
}
