import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { SimulatorRoutes } from '../simulator/routes/SimulatorRoutes'
// import { CheckingAuth } from '../ui/components'
// import { useCheckAuth } from '../hooks'
// import { SimulatorRoutes } from '../simulator/routes/SimulatorRoutes'

export const AppRouter = () => {
    
  // const { status } = useCheckAuth();

  // if(status === 'checking') {
  //     return <CheckingAuth />
  // }

  return (
    <Routes>

    {/* {
        (status === 'authenticated') 
        ? <Route path='/*'  element={<SimulatorRoutes />} />
        : <Route path='auth/*' element={<AuthRoutes />} />
    } */}

      <Route path='/*'  element={<SimulatorRoutes />} />
      <Route path='auth/*' element={<AuthRoutes />} />
      {/* <Route path='/*' element={<Navigate to="auth/login" />} /> */}

    </Routes>
  )
}
