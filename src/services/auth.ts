const baseUrl = import.meta.env.VITE_API_BASE_URL
import { FieldValues } from 'react-hook-form'

const login = async ({email, password}: {email: string, password: string}) => {
  const body = JSON.stringify({email, password})
  console.log(body)
  const request = await fetch(`${baseUrl}/api/auth/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body
  })
  const response = await request.json()
  return response
}

const singUp = async({name, lastName, email, password, phone, acceptTermsAndConditions, howKnow = null, referralCode = null, investmentAmount = null}: FieldValues) => {
  const body = JSON.stringify({name, lastName, email, password, phone, acceptTermsAndConditions, howKnow, referralCode, investmentAmount})
  console.log(body)
  const request = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body
  })
  const response = await request.json()
  return response
}

export {
  login,
  singUp
}