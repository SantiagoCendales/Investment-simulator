import './App.css'
import ToasterProvider from './components/Toaster'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
      <ToasterProvider />
      <AppRouter />
    </>
  )
}

export default App
