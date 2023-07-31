import { create } from 'zustand'

const token = localStorage.getItem('auth_token') || ''

interface State {
  isAuth: boolean
  investmentAmount: number | null,
  token: string
  loginState: () => void
  setInvestmentAmount: (investmentAmount: number) => void,
  setToken: (token: string) => void
}

export const useAuthStore = create<State>((set) => ({
  isAuth: !!token,
  token: token,
  investmentAmount: null,
  loginState: () => set(() => ({ isAuth: true })),
  setInvestmentAmount: (value) => set({investmentAmount: value}),
  setToken: (token) => set({token})
}))

