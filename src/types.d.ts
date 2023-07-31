export interface User {
  name: string
  lastName: string
  email: string
  password: string
  phone: string
  acceptTermsAndConditions: boolean
  howKnow: unknown  //TODO: FIX TYPE 
  referralCode: string | null
  investmentAmount: number | null
}

