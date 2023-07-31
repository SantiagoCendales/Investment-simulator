import { create } from 'zustand'

interface State {
  isAuth: boolean
  investmentAmount: number | null
  loginState: () => void
  setInvestmentAmount: (investmentAmount: number) => void
}

export const useAuthStore = create<State>((set) => ({
  isAuth: false,
  investmentAmount: null,
  loginState: () => set(() => ({ isAuth: true })),
  setInvestmentAmount: (value) => {({investmentAmount: value})}
}))

