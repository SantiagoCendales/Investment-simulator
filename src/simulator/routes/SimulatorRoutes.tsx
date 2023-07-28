import { Navigate, Route, Routes } from 'react-router-dom'
import { Simulator } from '../pages/Simulator'

export const SimulatorRoutes = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<Simulator />}/>

      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  </>
  )
}
