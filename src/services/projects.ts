const baseUrl = import.meta.env.VITE_API_BASE_URL

export const getProject = async() => {
  try {
    const request = await fetch(`${baseUrl}/projects`)
    const result = await request.json()
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}