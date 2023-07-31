const baseUrl = import.meta.env.VITE_API_BASE_URL

export const getSimulation = async({projectId, investmentValue, token}: {projectId: string, investmentValue: string, token: string}) => {
  try {
    const request = await fetch(`${baseUrl}/simulate`, {
      method: 'post',
      body: JSON.stringify({projectId, investmentValue}),
      headers: {
        "Content-Type": "application/json",
        "x-token": token
      },
    })
    const result = await request.json()
    return {
      ...result,
      status: request.status
    }
  } catch (error) {
    console.log(error)
  }
}