const FACT_API_ENDPOINT = 'https://catfact.ninja/fact'

// Fetch a random cat fact from the API
export const fetchFact = async () => {
  try {
    const response = await fetch(FACT_API_ENDPOINT)
    const data = await response.json()

    const { fact } = data
    return fact
  } catch (error) {
    // TODO: Handle error fact
  }
}
