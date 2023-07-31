import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { SimulatorRoutes } from '../simulator/routes/SimulatorRoutes'
import { useAuthStore } from '../store/auth'
// import { CheckingAuth } from '../ui/components'
// import { useCheckAuth } from '../hooks'
// import { SimulatorRoutes } from '../simulator/routes/SimulatorRoutes'

export const AppRouter = () => {
    
  const authStatus = useAuthStore((state) => state.isAuth) 
  // const authStatus = false
  console.log(authStatus)

  return (
    <Routes>

      <Route path='/*'  element={<SimulatorRoutes />} />
      <Route path='/verification/:token/:investmentAmount' element={<SimulatorRoutes />} />
      {
        authStatus
        ? <Route path='/*'  element={<SimulatorRoutes />} />
        :<Route path='auth/*' element={<AuthRoutes />} />
      }
      
      {/* <Route path='/*' element={<Navigate to="auth/login" />} /> */}

    </Routes>
  )
}
