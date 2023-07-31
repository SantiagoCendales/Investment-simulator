import React, { useEffect } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
// import { Button } from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { verifyAccount } from '../../services/auth'
import { toast } from 'react-hot-toast'
import { useAuthStore } from '../../store/auth'

export const VerificationPage = () => {
  const { token, investmentAmount } = useParams()

  const setInvestmentAmount = useAuthStore((state) => state.setInvestmentAmount)

  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      verifyAccount(token).then((resp) => {
        if (resp.ok) {
          toast.success('Verificación exitosa')
          navigate('/')
        } else {
          toast.error(resp.msg)
        }
      })
    }
    if(investmentAmount) {
      const parseValue = Number(investmentAmount)
      setInvestmentAmount(parseValue)
    }
  }, [token, investmentAmount])
  
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <AuthLayout
        title='Bienvenido a Lokl'
        subtitle='Te hemos enviado un correo de verificación. Por favor confirma tu identidad'
      >
        {/* <div>
          <Button label='Reenviar correo'/>
        </div> */}
      </AuthLayout>
      </div>
  )
}
